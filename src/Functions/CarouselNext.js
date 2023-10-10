const CarouselNext = () => {
    
    document.getElementById("next").onclick = () => {
        let lists = document.querySelectorAll(".item");
        document.getElementById("slide").appendChild(lists[0]);
    };
};

export default CarouselNext
