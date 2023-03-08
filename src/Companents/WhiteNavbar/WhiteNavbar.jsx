import { React, useEffect } from 'react'
import '../WhiteNavbar/whitenavbar.css'
// Images
import Image2 from '../Navbar/logo-dark.png'
// Icons

const Navbar = () => {
    useEffect(() => {

        const navbar = document.querySelector('.navbar');

        const handleScroll = () => {
            let gap = 50;
            if (window.pageYOffset > gap) {
                navbar.classList.add('active-class');
            } else {
                navbar.classList.remove('active-class');
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className='navbar navbar-expand-lg bg-body-tertiary fixed-top white-navbar'>
                <div className="container-fluid">
                    <a href="." class="navbar-brand">
                        <img src={Image2} alt="Dark Logo" class="dark-image" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href=".">Home
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" aria-current="page" href=".">Courses</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="courses-list-4-columns">Courses  List 4 Columns</a></li>
                                    <li><a class="dropdown-item" href="/">Course Single</a></li>
                                    <li><a class="dropdown-item" href="/">Course Simple Single</a></li>
                                    <li><a class="dropdown-item" href="/">User Dashboard</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" aria-current="page" href=".">Events</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/">Events List</a></li>
                                    <li><a class="dropdown-item" href="/">Event Single</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link  dropdown-toggle" aria-current="page" href=".">Pages</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/">Our Teachers</a></li>
                                    <li><a class="dropdown-item" href="/">About</a></li>
                                    <li><a class="dropdown-item" href="/">About Me</a></li>
                                    <li><a class="dropdown-item" href="/">Contact Us</a></li>
                                    <li><a class="dropdown-item" href="/">FAQ Page</a></li>
                                    <li className='dropdown'><a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="/">Forum</a>
                                        <ul class="dropdown-menu forum-dropwdown">
                                            <li><a class="dropdown-item" href="/">Events List</a></li>
                                            <li><a class="dropdown-item" href="/">Event Single</a></li>
                                        </ul>
                                    </li>
                                    <li><a class="dropdown-item" href="/">404 Page</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href=".">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href=".">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href=".">Elements</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href=".">

                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href=".">
                                    <i class="fa-solid fa-bars"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar