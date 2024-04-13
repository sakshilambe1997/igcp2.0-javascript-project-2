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

