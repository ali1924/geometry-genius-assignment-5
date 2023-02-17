let serialNo = 0;
// getElement by field id
function getElementByFieldID(fieldID) {
  const inputfieldValue = document.getElementById(fieldID).value;
  const fieldValue = parseFloat(inputfieldValue);
  if (isNaN(fieldValue)) {
    // return fieldValue;
    alert("Please Input valid number!!");
  } else if (fieldValue < 0) {
    alert("Please Input valid number!!");
  } else {
    // alert('Please Input Number');
    return fieldValue;
  }
}
// for triangle
document
  .getElementById("triangle-calculation-button")
  .addEventListener("click", function () {
    serialNo += 1;
    const triangle = document.getElementById("triangle-name").innerText;
    const base = getElementByFieldID("triangle-base-input");
    const height = getElementByFieldID("triangle-height-input");
    // Area of Triangle
    const area = 0.5 * base * height;
    if (!isNaN(area)) {
      // display arear data
      displayAreaData(serialNo, triangle, area);
    }
  });
function displayAreaData(serialNo, polygon, area) {
  const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
  tr.innerHTML = `
          <td>${serialNo + ". " + polygon}</td>
          <td>${area} cm<sup>2</sup></td>
          <td><button style="background-color:red;">Convert to m<sup>2</sup></button></td>
     
    `;
    
    container.appendChild(tr);
    // document.getElementById("btn").style.color = "red";
    // <td><button>Convert to m<sup>2</sup></button></td>
}

