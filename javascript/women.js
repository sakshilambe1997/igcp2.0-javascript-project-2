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

function lightMode(){
    const lightModeElement = document.getElementById('light');

    lightModeElement.classList.add('active')

    const darkMode = document.getElementById('dark');
    
    darkMode.classList.remove('active');

    const body=document.getElementById('body');
    body.className="bg-light";
}

function darkMode() {
    
    const lightModeElement = document.getElementById('light');
    lightModeElement.classList.remove('active');

    const darkMode = document.getElementById('dark');
    darkMode.classList.add('active');

    const body=document.getElementById('body');
    body.className="bg-dark";

    const boxElement=document.getElementById('box-container');
    boxElement.classList.add('text-color');

}


