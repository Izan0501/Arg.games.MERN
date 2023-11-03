import React from "react";
import '../css/main.css';
import '../css/cards.css';
import SocialIcons from "../components/SocialIcons";
import XboxSection from "../components/XboxSection";
import Ps5Section from "../components/Ps5Section";
import BootstrapSlider from "../subComponents/BootstrapSlider";
import JsCarousel from '../components/JsCarousel';
import Ps4Section from "../components/Ps4Section" ;
import SectionName from "../subComponents/SectionName";


export const Main = () => {
    return (
        <>
            <SocialIcons/>
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
                </div>
            </main>
            <BootstrapSlider />
            <SectionName content={'PS4 Collection'}/>
            <Ps4Section />
            <SectionName content={'PS5 Collection'}/>
            <Ps5Section/>
            <SectionName content={'Xbox X/S Series collection'}/>
            <XboxSection/>
            
        </>
    );
};

export default Main;
