import React from 'react'
import XFCE from "./assets/kali-desktop-xfce.jpg"
import XFCELOGO from "./assets/logo-xfce.svg" 
import GNOME from "./assets/kali-desktop-gnome.jpg"
import GNOMELOGO from "./assets/logo-gnome.svg"
import KDELOGO from "./assets/logo-kde.svg"
import KDE from "./assets/kali-desktop-kde.jpg"
function Navin() {
    return (
        <>
            <div className="bg-zinc-900 text-white">
                <div className="p-6 pb-10">
                    <h1 className="text-6xl font-semibold text-center p-3" style={{
                        background: "linear-gradient(90deg, rgba(62,14,181,1) 0%, rgba(40,40,161,1) 37%, rgba(135,83,194,1) 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                    }}

                    >Choose the desktop <br /> you prefer</h1>
                    <div className="flex flex-col mt-12 lg:flex-row">
                        <div className="max-w-xl p-6 font-semibold text-xl">
                            <div className="flex flex-row gap-1">
                                <img src={XFCELOGO}style={{ width: "50px" }} alt="" />
                                <h2 className="text-4xl font-bold">Xfce</h2>
                            </div>
                            <p>Xfce is a lightweight desktop environment for UNIX-like operating systems. It aims to be fast and low
                                on
                                system resources, while still being visually appealing and user friendly.</p>

                            <p className="mt-3">Xfce consists of separately packaged parts that together provide all functions of the desktop
                                environment,
                                but can be selected in subsets to suit user needs and preferences. This is Kali's default desktop
                                environment.</p>
                        </div>
                        <div className="grow">
                            <img className="rounded-lg" src={XFCE} alt="" />
                        </div>
                    </div>


                    <div className="flex flex-col mt-12 lg:flex-row">
                        <div>
                            <img className="rounded-lg" src={GNOME} alt="" />

                        </div>
                        <div className="max-w-xl p-6 font-semibold text-xl">
                            <div className="flex flex-row gap-1">
                                <img src={GNOMELOGO} style={{ width: "50px" }} alt="" />
                                <h2 className="text-4xl font-bold">GNOME Shell</h2>
                            </div>
                            <p>Every part of GNOME Shell has been designed to make it simple and easy to use. The Activities
                                Overview is
                                an easy way to access all your basic tasks. A press of a button is all it takes to view your open
                                windows, launch applications, or check if you have new messages. Having everything in one place is
                                convenient and means that you don't have to learn your way through a maze of different technologies.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col mt-12 lg:flex-row">
                        <div className="max-w-xl p-6 font-semibold text-xl">
                            <div className="flex flex-row gap-1">
                                <img src={KDELOGO} style={{ width: "50px" }} alt="" />
                                <h2 className="text-4xl font-bold">KDE Plasma</h2>
                            </div>
                            <p>
                                Plasma is made to stay out of the way as it helps you get things done. But under its light and
                                intuitive
                                surface, it's a powerhouse. So you're free to choose ways of usage right as you need them and when
                                you
                                need them.
                            </p>
                            <p className="mt-3">
                                With Plasma the user is king. Not happy with the color scheme? Change it! Want to have your panel on
                                the
                                left edge of the screen? Move it! Don't like the font? Use a different one! Download custom widgets
                                in
                                one click and add them to your desktop or panel.
                            </p>
                        </div>
                        <div>
                            <img className="rounded-lg" src={KDE} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navin