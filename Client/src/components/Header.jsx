import React from "react";
import '../css/header.css';
import NavHeader from '../subComponents/NavHeader';
import Profile from '../subComponents/Profile';
import WishList from "../subComponents/WishList";

export const Header = () => {
    return (
        <>
            <header className="header">
                <a href="#" className="header__link">
                    ARG.GAMES
                </a>
                <div className="list__icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-list-ul w-90"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                        />
                    </svg>
                </div>
                <div className="searchBox">
                    <input type="text" placeholder="SearchGame" style={{ color: "white" }} />
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </a>
                </div>
                <ul className="navegation">
                    <NavHeader content={'Games'} />
                    <WishList />
                    <li>
                        <a href="#">
                            <div className="btn-group">
                                <button
                                    className="btn btn dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                    aria-expanded="false"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-cart"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                </button>
                                <div className="dropdown-menu">
                                    <ul id="cart">

                                    </ul>
                                    <footer id="dFooter">
                                        <template id="templateFooter">
                                            <div>
                                                <p className="mb-0">
                                                    Total: $<span className="spn">15</span>
                                                </p>
                                                <button type="button" className="btn btn-shop">
                                                    <span className="spnShop">Complete</span>
                                                </button>
                                            </div>
                                        </template>
                                    </footer>
                                </div>
                            </div>
                            <div className="rounded-pill" id="pill">
                                0
                            </div>
                        </a>
                    </li>
                    <Profile />
                </ul>
            </header>
            <template id="template">
                <li className="p-2 w-50 list-group-item dis align-items-center">
                    <img className="template-img" src="#" alt="img" />
                    <span className="lead">Games</span>
                    <span className="badge rounded-pill">10</span>
                    <div>
                        <button className="btn btn-sm btn-success">+</button>
                        <button className="btn btn-sm btn-danger">-</button>
                        <hr />
                    </div>
                </li>
                <div>
                    <p className="textPrice">Total: $<span class="spanPrice">19</span></p>
                </div>
            </template>

        </>

    );
};

export default Header;
