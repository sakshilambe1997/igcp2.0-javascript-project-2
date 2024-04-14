// head image section

    function imageChange() {
        const imageElement = document.getElementById("image-change");

        const min = 1;
        const max = 6;
        const mathElement = Math.round(Math.random() * (max - min) + (min));
        console.log(mathElement);

        switch (mathElement) {
            case (1):
                imageElement.src = "./img/img-1.webp";
                break;

            case (2):
                imageElement.src = "./img/img-2.webp";
                break;

            case (3):
                imageElement.src = "./img/img-3.webp";
                break;

            case (4):
                imageElement.src = "./img/img-4.webp";
                break;

            case (5):
                imageElement.src = "./img/img-5.webp";
                break;

            case (6):
                imageElement.src = "./img/img-6.webp";
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

    function boxContainer(){
        const boxElements=document.getElementById('box-container');
        boxElements.className.add('text-color');
    }
