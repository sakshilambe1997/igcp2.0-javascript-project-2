// like button
let state =true;

function like(){
    const likeElement = document.getElementById("like")
    if (state ){
        likeElement.src="./../img/mens-img/heart-red.png";
       
        state = false;
    }
        else {
            likeElement.src="./../img/mens-img/heart-blank.png";
            state = true;
        }

    }
    // card2
    
function like2(){
    const likeElement = document.getElementById("like2")
    if (state ){
        likeElement.src="./../img/mens-img/heart-red.png";
      
        state = false;
    }
        else {
            likeElement.src="./../img/mens-img/heart-blank.png";
            state = true;
        }

    }
    // card 3

    function like3(){
        const likeElement = document.getElementById("like3")
        if (state ){
            likeElement.src="./../img/mens-img/heart-red.png";
          
            state = false;
        }
            else {
                likeElement.src="./../img/mens-img/heart-blank.png";
                state = true;
            }
    
        }


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
    imageElement.src= "./../img/women-partywear/lehenga-1.jpg"
}

function changeImgyellow(){
    const imageElement =document.getElementById("card-img")
    imageElement.src= "./../img/women-partywear/lehenga-1.1.jpg"
}

function changeImggreen(){
    const imageElement =document.getElementById("card-img")
    imageElement.src= "./../img/women-partywear/lehenga-1.2.jpg"
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
    imageElement.src= "./../img/women-partywear/lehenga-2.jpg"
}

function changeImgyellow2(){
    const imageElement =document.getElementById("card-img2")
    imageElement.src= "./../img/women-partywear/lehenga-2.1.jpg"
}

function changeImggreen2(){
    const imageElement =document.getElementById("card-img2")
    imageElement.src= "./../img/women-partywear/lehenga-2.3.jpg"
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
  imageElement.src= "./../img/women-partywear/lehenga-3.jpg"
}

function changeImgred3(){
  const imageElement =document.getElementById("card-img3")
  imageElement.src= "./../img/women-partywear/lehenga-3.1.jpg"
}

function changeImggray3(){
  const imageElement =document.getElementById("card-img3")
  imageElement.src= "./../img/women-partywear/lehenga-3.2.jpg"
}




