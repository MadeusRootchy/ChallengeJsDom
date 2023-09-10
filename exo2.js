const met_1 = document.querySelector('ul').getElementsByTagName('li');
console.log("methode 1 :")

for (el of met_1) {
    console.log(el.textContent);
}
console.log("......   .......   .......")
console.log("methode 2 :")

const met_2 = document.querySelectorAll('ul li');
for (el of met_2) {
    console.log(el.textContent);
}

console.log("......   .......   .......")
console.log("methode 3 :")

const met_3 = document.querySelector('ul').children;
for (let i = 0; i < met_3.length; i++) {
  console.log(met_3[i].textContent);

  console.log("......   .......   .......")
console.log("methode 4 :")

  const met_4 = document.getElementsByTagName('ul')[0].children;
for (let i = 0; i < met_4.length; i++) {
  console.log(met_4[i].textContent);
}

}
