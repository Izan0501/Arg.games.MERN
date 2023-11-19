import React, { useEffect, useState } from "react";
import "../css/header.css";
import NavHeader from "../subComponents/NavHeader";
import Profile from "../subComponents/Profile";
import WishList from "../subComponents/WishList";
import CartElement from "../subComponents/CartElement";

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
                    <input
                        type="text"
                        placeholder="SearchGame"
                        style={{ color: "white" }}
                    />
                    <a href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-search"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </a>
                </div>
                <ul className="navegation">
                    <NavHeader content={"Games"} />
                    <WishList />
                    <CartElement />
                    <Profile />
                </ul>
            </header>
        </>
    );
};

export default Header;
