import React from "react";
import BootstrapSlider from "../subComponents/BootstrapSlider";
import JsCarousel from "../subComponents/JsCarousel";

export const Main = () => {
    return (
        <>
            <JsCarousel />
            <main className="contentTxt">
                <div className="txtDesctipt">
                    <h2>What's New</h2>
                    <p>
                        On this page you can find the highest-grossing games in the gaming
                        world that currently covers available with new graphic and
                        playability capabilities offered by new generation consoles such as
                        Xbox series, PS5, switch, PC, among others. Sections for Xbox, PC
                        and Switch will soon be available.
                    </p>
                    <a href="#">More Info</a>
                </div>
            </main>
            <BootstrapSlider />
        </>
    );
};

export default Main;
