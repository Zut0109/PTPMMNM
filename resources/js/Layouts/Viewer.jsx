import { Head, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Navbar from '../Components/User/Navbar'
import Footer from '../Components/User/Footer'
import '/css/front-end.css';
import '/js/front-end.js';
import { Link } from '@inertiajs/inertia-react'

export default function Viewer({children, title}) {
    const { auth } = usePage().props;
    const { flash } = usePage().props;
    
    flash.type && toast[flash.type](flash.message)

    return (
        <div>
             <header class="header" data-header>
            <div class="container">
                <div class="overlay" data-overlay></div>
                <a href={route('index')} class="logo">
                    <img src="./images/logo.svg" alt="Filmlane logo"/>
                </a>
                <div class="header-actions mt-4">
                { auth.user != null 
                            ?
                            <li className="nav-item pe-3 d-flex align-items-center">
                                <ul className="nav-link text-white" href="#" role="button" aria-expanded="false">
                                <img src={'/avatar/avatars/' + auth.user.avatar +'.jpg'} className="avatar avatar-sm  me-3 " />
                                    <div class="dropdown">
                                    <button class="dropbtn btn btn-primary">{auth.user.name}</button>
                                    <div class="dropdown-content">
                                             <Link className="nav-link " as='a' method='get' href={route('viewerprofile')}>
                                                <span className="nav-link-text ms-1">Profile</span>
                                            </Link> 
                                            <Link className="nav-link " as='a' method='get' href={route('favoritelist')}>
                                                <span className="nav-link-text ms-1">Favorite</span>
                                            </Link> 
                                            <Link className="nav-link " as='a' method='get' href={route('historylist')}>
                                                <span className="nav-link-text ms-1">History</span>
                                            </Link> 
                                            <Link className="nav-link " as='a' method='post' href={route('logout')}>
                                                <span className="nav-link-text ms-1">Log out</span>
                                            </Link> 
                                    </div>
                                    </div>
                                </ul>
                            </li>
                            : 
                            <div>
                            <button class="search-btn">
                                <ion-icon name="search-outline"></ion-icon>
                            </button>  
                            <a href={route('login')} class="btn btn-primary">Sign in</a>
                            </div>
                        }
                    
                </div>
            <Navbar pageName={ title } />

            </div>
        </header>
        <main>
            {children}
        </main>
        </div>
       
        
    )
}
