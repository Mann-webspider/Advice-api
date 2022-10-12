let adviceId = document.getElementById("adviceId");
let adviceData = document.getElementById("adviceData");
function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      document.getElementById("adviceId").innerHTML = `advice #${data.id}`;
      document.getElementById("adviceData").innerHTML = `"${data.advice}"`;
    });
}
