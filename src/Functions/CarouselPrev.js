const CarouselPrev = () => {

    document.getElementById("prev").onclick = function () {
      const lists = document.querySelectorAll(".item");
      document.getElementById("slide").prepend(lists[lists.length - 1]);
    };
  };

  export default CarouselPrev