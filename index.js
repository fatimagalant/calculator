let sum = "";
function buildSum(char) {
  sum += char;
  document.getElementById(`output`).innerHTML = sum;
}
function answer() {
  sum = eval(sum);
  document.getElementById(`output`).innerHTML = sum;
}
function reset() {
  document.getElementById(`output`).innerHTML = "0";
  sum = "";
}
