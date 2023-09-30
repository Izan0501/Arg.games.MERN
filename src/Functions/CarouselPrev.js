import React from 'react';

export const CarouselPrev = () => {

  document.querySelector("#prev").onclick = function () {
    let lists = document.querySelectorAll(".item");
    document.querySelector("#slide").prepend(lists[lists.length - 1]);
  };
};

export default CarouselPrev