from tkinter import *
from win32api import GetSystemMetrics, error
from datetime import datetime
import psycopg2


def callback(entity, entry0):
    if(len(entity.get()) >= 10):

        try:
            conn = psycopg2.connect(
                database="d77d0i79qgv23i",
                user='edbavjnclwyaoi',
                password='e3e15b5d5bed3f70c05ee5cca76a9c54106dc1188e566283dcfe7c2ebe3cf75e',
                host='ec2-18-235-4-83.compute-1.amazonaws.com',
                port= '5432'
            )
        except:
            print(error)

        cur = conn.cursor()
        cur.execute('SELECT * FROM "MyApp_rfiddetails"')
        rfidRows = cur.fetchall()
        
        cur.execute('SELECT * FROM "MyApp_userdetails"')
        userRows = cur.fetchall()

        for rfidRow in rfidRows:
            if( entity.get()==rfidRow[1] ):
                for userRow in userRows:
                    if( rfidRow[4]==userRow[5] ):
                        dt = datetime.now()
                        date = dt.strftime('%d-%m-%Y')
                        time = dt.strftime('%H:%M:%S')

                        cur.execute('INSERT INTO "MyApp_entities" ("name","houseNo","mobileNo","rfid","carNo","vehicleClass","date","time","visibility") VALUES (\'' + userRow[1] + '\',\'' + userRow[3] + '\',\'' + userRow[6] + '\',\'' + rfidRow[1] + '\',\'' + rfidRow[2] + '\',\'' + rfidRow[3] + '\',\''+ date + '\',\'' + time + '\',1)')
        
        conn.commit()

        entry0.delete(0, END)
        conn.close()


window = Tk()

entity = StringVar()
entity.trace("w", lambda name, index, mode, entity= entity: callback(entity, entry0))

window.title("OffDuty Security")
window.attributes("-fullscreen", True)
window.configure(bg = "#810000")
canvas = Canvas(
    window,
    bg = "#810000",
    height = GetSystemMetrics(1),
    width = GetSystemMetrics(0),
    bd = 0,
    highlightthickness = 0,
    relief = "ridge")
canvas.place(x = 0, y = 0)

background_img = PhotoImage(file = f"background.png")
background = canvas.create_image(
    GetSystemMetrics(0)/2, GetSystemMetrics(1)/2,
    image=background_img)

entry0_img = PhotoImage(file = f"img_textBox0.png")
entry0_bg = canvas.create_image(
    GetSystemMetrics(0)/2, (GetSystemMetrics(1)/2)+190,
    image = entry0_img)

entry0 = Entry(
    bd = 0,
    bg = "#eeebdd",
    highlightthickness = 0,
    textvariable=entity)

entry0.focus()

entry0.place(
    x = (GetSystemMetrics(0)/2)-130, y = (GetSystemMetrics(1)/2)+171,
    width = 260.0,
    height = 38)

window.resizable(False, False)
window.mainloop()
