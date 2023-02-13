import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import chevronRight from '../../assets/img/chevronRight.png';

export const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [openMenuIndex, setOpenMenuIndex] = useState(-1);
    const nav = useRef(null);
    const mainLocation = useRef(0);

    useEffect(() => {
        const body = document.querySelector("body");
        body.addEventListener("click", (e) => {
            const clickedElm = e.target;

            if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("keepOpen")) {
                setIsNavOpen(false);
            }
        });
    }, []);

    useEffect(() => {
        function handleScroll() {
            let currentOffset = window.pageYOffset;
            if (mainLocation.current >= currentOffset) {
                nav.current.style.top = '0';
            } else {
                nav.current.style.transition = 'top 0.3s'
                nav.current.style.top = '-100px'
            }
            mainLocation.current = currentOffset;
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSidebar = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleMenu = (index) => {
        setOpenMenuIndex(index === openMenuIndex ? -1 : index);
    };

    return (
        <nav ref={nav} className={isNavOpen ? 'active' : ''}>
            <div className="nav-bar closeNav">
                <i className='bx bx-menu sidebarOpen' onClick={toggleSidebar} />
                <span className="logo navLogo"><Link to={"/inicio"}>Chpanth</Link></span>
                <div className="menu keepOpen">
                    <div className="logo-toggle">
                        <span className="logo navLogo"><Link to={"/inicio"}>Chpanth</Link></span>
                        <i className='bx bx-x siderbarClose' onClick={toggleSidebar} />
                    </div>

                    <ul className="list keepOpen">

                        <li className="list__item">
                            <div className="list__button">
                                <span className="bx-icon keepOpen"><i className='bx bxs-home' /></span>
                                <Link to={"/inicio"} className="nav__link">Inicio</Link>
                            </div>
                        </li>

                        <li className={`list__item list__item--click keepOpen ${openMenuIndex === 0 ? 'arrow' : ''}`}>
                            <div className="list__button list__button--click keepOpen" onClick={() => toggleMenu(0)}>
                                <span className="bx-icon keepOpen"><i className='bx bx-headphone'></i></span>
                                <span href="#" className="nav__link keepOpen">Periféricos</span>
                                <img src={chevronRight} className="list__arrow keepOpen" />
                            </div>
                            <ul className={`list__show ${openMenuIndex === 0 ? 'show' : ''}`}>
                                <li className="list__inside">
                                    <Link to={"/perifericos/ratones-2023"} className="nav__link nav__link--inside">Mejores ratones gaming</Link>
                                </li>
                            </ul>
                            <ul className={`list__show ${openMenuIndex === 0 ? 'show' : ''}`}>
                                <li className="list__inside">
                                    <Link to={"/perifericos/teclados-2023"} className="nav__link nav__link--inside">Mejores teclados gaming</Link>
                                </li>
                            </ul>
                            <ul className={`list__show ${openMenuIndex === 0 ? 'show' : ''}`}>
                                <li className="list__inside">
                                    <Link to={"/perifericos/auriculares-2023"} className="nav__link nav__link--inside">Mejores auriculares gaming</Link>
                                </li>
                            </ul>
                        </li>

                        <li className={`list__item list__item--click keepOpen ${openMenuIndex === 1 ? 'arrow' : ''}`}>
                            <div className="list__button list__button--click keepOpen" onClick={() => toggleMenu(1)}>
                                <span className="bx-icon keepOpen"><i className='bx bx-mobile-alt' /></span>
                                <span href="#" className="nav__link keepOpen">Móviles</span>
                                <img src={chevronRight} className="list__arrow keepOpen" />
                            </div>
                            <ul className={`list__show ${openMenuIndex === 1 ? 'show' : ''}`}>
                                <li className="list__inside">
                                    <Link to={"/moviles/moviles-cp"} className="nav__link nav__link--inside">Móviles calidas/precio</Link>
                                </li>
                            </ul>
                        </li>

                        <li className={`list__item list__item--click keepOpen ${openMenuIndex === 2 ? 'arrow' : ''}`}>
                            <div className="list__button list__button--click keepOpen" onClick={() => toggleMenu(2)}>
                                <span className="bx-icon keepOpen"><i className='bx bx-laptop'></i></span>
                                <span href="#" className="nav__link keepOpen">Portátiles</span>
                                <img src={chevronRight} className="list__arrow keepOpen" />
                            </div>
                            <ul className={`list__show ${openMenuIndex === 2 ? 'show' : ''}`}>
                                <li className="list__inside">
                                    <Link to={"/portatiles/portatiles-cp"} className="nav__link nav__link--inside">Portátiles calidas/precio</Link>
                                </li>
                            </ul>
                        </li>

                        <li className={`list__item list__item--click keepOpen ${openMenuIndex === 3 ? 'arrow' : ''}`}>
                            <div className="list__button list__button--click keepOpen" onClick={() => toggleMenu(3)}>
                                <span className="bx-icon keepOpen"><i className='bx bx-mobile-alt' /></span>
                                <span href="#" className="nav__link keepOpen">Tablets</span>
                                <img src={chevronRight} className="list__arrow keepOpen" />
                            </div>
                            <ul className={`list__show ${openMenuIndex === 3 ? 'show' : ''}`}>
                                <li className="list__inside">
                                    <Link to={"/tablets/tablets-cp"} className="nav__link nav__link--inside">Tablets calidas/precio</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}