import { Head, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Navbar from '../Components/User/Navbar'
import Sidebar from '../Components/User/Sidebar'
import Footer from '../Components/User/Footer'

export default function Viewer({children, title}) {
    const { flash } = usePage().props;
    
    flash.type && toast[flash.type](flash.message)

    return (
        <div className="g-sidenav-show bg-gray-100">
            <div className="min-height-300 bg-dark position-absolute w-100"></div>
                <Head title={ title } />
                <Sidebar />   
                <main className="main-content position-relative border-radius-lg d-flex flex-column min-vh-100 ">
                    <Navbar pageName={ title } />
                    <Toaster position='top-center' duration='4000'/>
                    {children}
                    <Footer/>
                </main>    
                     
        </div>
    )
}
