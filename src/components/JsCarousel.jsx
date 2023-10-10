import React from 'react'
import CarouselPrev from '../Functions/CarouselPrev';
import CarouselNext from '../Functions/CarouselNext';

export const JsCarousel = () => {

    return (
        <div className="sliderbox">
            <div className="container">
                <div id="slide">
                    <div id='item1' className="item">
                        <div className="content">
                            <div className="name" style={{ color: "white" }}>AC Valhalla</div>
                            <div className="description" style={{ color: "white" }}>UBISOFT ORIGINAL</div>
                            <button>Go to store</button>
                        </div>
                    </div>
                    <div id='item2' className="item" >
                        <div className="content">
                            <div className="name" style={{ color: "white" }}>SpiderMan</div>
                            <div className="description" style={{ color: "white" }}>PS ORIGINAL</div>
                            <button>Go to store</button>
                        </div>
                    </div>
                    <div id='item3' className="item">
                        <div className="content">
                            <div className="name" style={{ color: "white" }}>WatchDogs Legion</div>
                            <div className="description" style={{ color: "white" }}>UBISOFT ORIGINAL</div>
                            <button>Go to store</button>
                        </div>
                    </div>
                    <div id='item4' className="item">
                        <div className="content">
                            <div className="name" style={{ color: "white" }}>GOD OF WAR</div>
                            <div className="description" style={{ color: "white" }}>PS ORIGINAL</div>
                            <button>Go to store</button>
                        </div>
                    </div>
                    <div id='item5' className="item">
                        <div className="content">
                            <div className="name" style={{ color: "white" }}>CIBERPUNK 2077</div>
                            <div className="description" style={{ color: "white" }}>PHANTOM LIBERTY DLC</div>
                            <button>Go to store</button>
                        </div>
                    </div>
                    <div id='item6' className="item">
                        <div className="content">
                            <div className="name" style={{ color: "white" }}>BATTLEFIELD</div>
                            <div className="description" style={{ color: "white" }}>Electronic Arts </div>
                            <button>Go to store</button>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick= {CarouselPrev} id="prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg>
                </button>
                <button id="next" onClick={CarouselNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                </button>
            </div>
        </div>
        </div>
    );
};

export default JsCarousel