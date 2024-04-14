function imageChange() {
    const imageElement = document.getElementById("women-image-change");

    const min = 1;
    const max = 4;
    const mathElement = Math.round(Math.random() * (max - min) + (min));
    console.log(mathElement);

    switch (mathElement) {
        case (1):
            imageElement.src = "./../img/women-img/women-head-img-3.webp";
            break;


        case (2):
            imageElement.src = "./../img/women-img/women-head-img-4.webp";
            break;

        case (3):
            imageElement.src = "./../img/women-img/women-slide-1-img.jpg";
            break;

        case (4):
            imageElement.src = "./../img/women-img/women-slide-img-2.jpg";
            break;

    
    }

}



