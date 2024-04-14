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
        alert('You can not add more than 5 items');

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
// 2 card

 const quantityPriceElement2 = document.getElementById("quantity-price2")
  const finalPriceElement2 = document.getElementById("final-price2")

function increaseQuantity2() {
    const quantityElement = document.getElementById('quantity2');

    let quantityValue = parseInt(quantityElement.innerText);
    // let priceQuantityValue = parseInt(quantityPriceElement.innerText);
    if (quantityValue < 5) {
        quantityElement.innerText = ++quantityValue;

    }
    else {
        alert('You can not add more than 5 items');

    }
    quantityPriceElement2.innerText = `${quantityValue} X 599`;
    finalPriceElement2.innerText = `Total : ${quantityValue * 599}`;


}

function decreaseQuantity2() {
    const quantityElement = document.getElementById('quantity2');
    let quantityValue = parseInt(quantityElement.innerText);

    if (quantityValue > 1) {
        quantityElement.innerText = --quantityValue;
    }
    else {
        alert('You can not add less than 1 items');
    }
    quantityPriceElement2.innerText = `${quantityValue} X 599`;
    finalPriceElement2.innerText = `Total : ${quantityValue * 599}`;

}

function changeImgblue2(){
    const imageElement =document.getElementById("card-img2")
    imageElement.src= "./../img/mens-img/tshirt-2b.jpg"
}

function changeImgyellow2(){
    const imageElement =document.getElementById("card-img2")
    imageElement.src= "./../img/mens-img/tshirt-2y.jpg"
}

function changeImggreen2(){
    const imageElement =document.getElementById("card-img2")
    imageElement.src= "./../img/mens-img/tshirt-2g.jpg"
}
//card 3

const quantityPriceElement3 = document.getElementById("quantity-price3")
const finalPriceElement3 = document.getElementById("final-price3")

function increaseQuantity3() {
  const quantityElement = document.getElementById('quantity3');

  let quantityValue = parseInt(quantityElement.innerText);
  // let priceQuantityValue = parseInt(quantityPriceElement.innerText);
  if (quantityValue < 5) {
      quantityElement.innerText = ++quantityValue;

  }
  else {
      alert('You can not add more than 5 items');

  }
  quantityPriceElement3.innerText = `${quantityValue} X 650`;
  finalPriceElement3.innerText = `Total : ${quantityValue * 650}`;


}

function decreaseQuantity3() {
  const quantityElement = document.getElementById('quantity3');
  let quantityValue = parseInt(quantityElement.innerText);

  if (quantityValue > 1) {
      quantityElement.innerText = --quantityValue;
  }
  else {
      alert('You can not add less than 1 items');
  }
  quantityPriceElement3.innerText = `${quantityValue} X 650`;
  finalPriceElement3.innerText = `Total : ${quantityValue * 650}`;

}

function changeImgblue3(){
  const imageElement =document.getElementById("card-img3")
  imageElement.src= "./../img/mens-img/tshirt-3b.jpg"
}

function changeImgred3(){
  const imageElement =document.getElementById("card-img3")
  imageElement.src= "./../img/mens-img/tshirt-3r.jpg"
}

function changeImggray3(){
  const imageElement =document.getElementById("card-img3")
  imageElement.src= "./../img/mens-img/tshirt-3g.jpg"
}




