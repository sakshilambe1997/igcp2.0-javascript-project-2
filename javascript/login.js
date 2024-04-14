function login(){
    alert("Login Successfully!!");
}

function loginImageChange() {
    const imageElement = document.getElementById("login-image-change");

    const min = 1;
    const max = 5;
    const mathElement = Math.round(Math.random() * (max - min) + (min));
    console.log(mathElement);

    switch (mathElement) {
        case (1):
            imageElement.src = "./../img/login-img/background-img-1.jpg";
            break;

        case (2):
            imageElement.src = "./../img/login-img/back-img-8.jpg";
            break;

        case (3):
            imageElement.src = "./../img/login-img/back-img-10.jpg";
            break;

        case (4):
            imageElement.src = "./../img/login-img/back-img-6.jpg";
            break;

        case (5):
            imageElement.src = "./../img/login-img/back-img-7.jpg";
            break;

    }

       
}

