const toggleSwitch = document.querySelector('input');
let basicPrice = document.querySelector('#basicPrice');
let professionalPrice = document.querySelector('#professionalPrice');
let masterPrice = document.querySelector('#masterPrice');
const monthly = {
  basic: 19.99,
  professional: 24.99,
  master: 39.99
};
const annually = {
  basic: 199.99,
  professional: 249.99,
  master: 399.99
};
toggleSwitch.onclick=()=>{
  if (toggleSwitch.checked===true) {
    basicPrice.textContent = monthly.basic;
    professionalPrice.innerText = monthly.professional;
    masterPrice.innerText = monthly.master;
  }
  else if (toggleSwitch.checked===false) {
    basicPrice.innerText = annually.basic;
    professionalPrice.innerText = annually.professional;
    masterPrice.innerText = annually.master;
  }
}