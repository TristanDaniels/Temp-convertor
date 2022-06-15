function tempCon() {
  let celcius = document.getElementById("celcius").value;
  let answer = celcius * 1.8 + 32;
  console.log(answer);
  document.querySelector("#answer").innerHTML = answer;
}
function tempCon2() {
  let farhenheit = document.getElementById("farhenheit").value;
  let answer2 = (farhenheit - 32) * (5 / 9);
  console.log(answer2);
  document.querySelector("#answer2").innerHTML = answer2;
}
