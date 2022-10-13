function ChangeColor() {
alert("De kleur wordt aangepast.")
console.log("Het werkt ook in de console")
}

function Calculator(num, num2) {
   let answer = num + num2;
   console.log(answer);
   alert(answer);

   Calculator(2, 44)
}