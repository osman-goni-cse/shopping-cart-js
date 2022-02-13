function updateNumOfProductInput(numOfProductID, isIncrement, priceID, productPrice) {
  const numOfProductInput = document.getElementById(numOfProductID);
  let numOfProduct = parseInt(numOfProductInput.value);

  if(isIncrement) {
    numOfProduct = numOfProduct + 1;
  }
  else if(numOfProduct > 0) {
    numOfProduct = numOfProduct - 1;
  }

  numOfProductInput.value = numOfProduct;
  var price = document.getElementById(priceID);

  price.innerText = numOfProduct * productPrice;

  // sub total and total update
  const PhoneSubTotal = document.getElementById('phone-price').innerText;
  const CaseSubTotal = document.getElementById('case-price').innerText;

  const subTotal = parseInt(PhoneSubTotal) + parseInt(CaseSubTotal);
  document.getElementById('subtotal-calculate').innerText = subTotal;

  const tax = subTotal / 10;
  document.getElementById('tax-calculate').innerText = tax;

  document.getElementById('total-calculate').innerText = subTotal + tax;
}

// function updateNumOfCaseProduct(isIncrement) {
//   const numOfCaseProductInput = document.getElementById('numOfCaseProductInput');
//   let numOfProduct = parseInt(numOfCaseProductInput.value);

//   if(isIncrement) {
//     numOfProduct = numOfProduct + 1;
//   }
//   else if(numOfProduct > 0) {
//     numOfProduct = numOfProduct - 1;
//   }
//   numOfCaseProductInput.value = numOfProduct;
//   var price = document.getElementById('case-price');
//   price.innerText = numOfProduct * 59;
// }

const caseIncBtn = document.getElementById('case-plus');

caseIncBtn.addEventListener('click', function() {
  // const numOfCaseProductInput = document.getElementById('numOfCaseProductInput');
  // const numOfProduct = parseInt(numOfCaseProductInput.value);

  // numOfCaseProductInput.value = numOfProduct + 1;
  // updateNumOfCaseProduct(true);
  updateNumOfProductInput('numOfCaseProductInput', true, 'case-price', 59);
});

const caseDecrBtn = document.getElementById('case-minus');

caseDecrBtn.addEventListener('click', function(){
  // const numOfCaseProductInput = document.getElementById('numOfCaseProductInput');
  // const numOfProduct = parseInt(numOfCaseProductInput.value);

  // numOfCaseProductInput.value = numOfProduct - 1; 
  // updateNumOfCaseProduct(false);
  updateNumOfProductInput('numOfCaseProductInput', false, 'case-price', 59);
});

// function updateNumOfPhoneProduct(isIncrement) {
//   const numOfPhoneProductInput = document.getElementById('numOfPhoneProductInput');
//   let numOfProduct = parseInt(numOfPhoneProductInput.value);

//   if(isIncrement) {
//     numOfProduct = numOfProduct + 1;
//   }
//   else if(numOfProduct > 0) {
//     numOfProduct = numOfProduct - 1;
//   }
//   numOfPhoneProductInput.value = numOfProduct;
//   var price = document.getElementById('phone-price');
//   price.innerText = numOfProduct * 1219;
// }

document.getElementById('phone-plus').addEventListener('click', function() {
  // updateNumOfPhoneProduct(true);
  updateNumOfProductInput('numOfPhoneProductInput', true, 'phone-price', 1219);
});

document.getElementById('phone-minus').addEventListener('click', function() {
  updateNumOfProductInput('numOfPhoneProductInput', false, 'phone-price', 1219);
});

// Sub Total and Total calculation

