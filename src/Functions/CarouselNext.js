import React from 'react'

export const CarouselNext = () => {
    document.querySelector("#next").onclick = function () {
        let lists = document.querySelectorAll(".item");
        document.querySelector("#slide").appendChild(lists[0]);
    }
}

export default CarouselNext
