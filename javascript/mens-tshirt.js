const quantityPriceElement = document.getElementById("quantity-price")
const finalPriceElement = document.getElementById("final-price")

function increaseQuantity() {
    const quantityElement = document.getElementById('quantity');

    let quantityValue = parseInt(quantityElement.innerText);
    // let priceQuantityValue = parseInt(quantityPriceElement.innerText);
    if (quantityValue < 5) {
        quantityElement.innerText = ++quantityValue;

    }
    else {
        alert('Yoc can not add more than 5 items');

    }
    quantityPriceElement.innerText = `${quantityValue} X 699`;
    finalPriceElement.innerText = `Total : ${quantityValue * 699}`;


}

function decreaseQuantity() {
    const quantityElement = document.getElementById('quantity');
    let quantityValue = parseInt(quantityElement.innerText);

    if (quantityValue > 1) {
        quantityElement.innerText = --quantityValue;
    }
    else {
        alert('You can not add less than 1 items');
    }
    quantityPriceElement.innerText = `${quantityValue} X 699`;
    finalPriceElement.innerText = `Total : ${quantityValue * 699}`;

}
// 
function changeImgblue(){
    const imageElement =document.getElementById("card-img")
    imageElement.src= "./../img/mens-img/tshirt-1b.jpg"
}

function changeImgyellow(){
    const imageElement =document.getElementById("card-img")
    imageElement.src= "./../img/mens-img/tshirt-1y.jpg"
}

function changeImggreen(){
    const imageElement =document.getElementById("card-img")
    imageElement.src= "./../img/mens-img/tshirt-1g.jpg"
}



