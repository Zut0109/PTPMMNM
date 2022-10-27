import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import 'react-dropdown/style.css';

export default function Navbar({props, pageName}) {
    const { auth } = usePage().props;

    return (
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
            <div className="container-fluid py-1 px-3">
                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li className="breadcrumb-item text-sm"><a className="opacity-5 text-white" href="#">Logo</a></li>
                    </ol>
                </nav>
                    <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                        <form>
                            <label>
                                Search:
                                <input type="text" name="name" placeholder='Name a movie'/>
                            </label>
                            <button type="submit" className="btn btn-info mt-1 mb-0">Search</button>
                        </form>
                    </div>
                    <ul className="navbar-nav justify-content-end">                        
                            <li className="nav-item pe-3 d-flex align-items-center">
                                <ul className="nav-link text-white" href="#" role="button" aria-expanded="false">
                                    <img src={'/avatar/avatars/' + auth.user.avatar +'.jpg'} className="avatar avatar-sm  me-3 " />
                                    {auth.user.name}
                                </ul>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <Link as='a' method='post' href={route('logout')} className="nav-link text-white font-weight-bold px-0">
                                    <i className="fa fa-user me-sm-1" />
                                    <span className="d-sm-inline d-none">Log out</span>
                                </Link>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
