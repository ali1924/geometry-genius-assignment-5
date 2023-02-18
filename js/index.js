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
// for rectangle
document
  .getElementById("rectangle-calculation-button")
  .addEventListener("click", function () {
    serialNo += 1;
    const rectangle = document.getElementById("rectangle-name").innerText;
    const width = getElementByFieldID("rectangle-width-input");
    const length = getElementByFieldID("rectangle-length-input");
    // Area of rectangle
    const area = width * length;
    displayAreaData(serialNo, rectangle, area);
  });
// for parallelogram
document
  .getElementById("parallelogram-calculation-button")
  .addEventListener("click", function () {
    console.log("daqdg");
    serialNo += 1;
    const parallelogram =
      document.getElementById("parallelogram-name").innerText;
    const base = getElementByFieldID("parallelogram-base-input");
    const height = getElementByFieldID("parallelogram-height-input");

    const preBase = document.getElementById("parallelogram-base-preinput");
    preBase.innerText = base;
    const preLength = document.getElementById("parallelogram-height-preinput");
    preLength.innerText = height;

    // Area of parallelogram
    const area = base * height;

    displayAreaData(serialNo, parallelogram, area);
  });
  // for rhombus
  document
    .getElementById("rhombus-calculation-button")
    .addEventListener("click", function () {
      console.log("daqdg");
      serialNo += 1;
      const rhombus = document.getElementById("rhombus-name").innerText;
      const d1 = getElementByFieldID("rhombus-d1-input");
      const d2 = getElementByFieldID("rhombus-d2-input");

      const preD1 = document.getElementById("rhombus-d1-preinput");
      preD1.innerText = d1;
      const preD2 = document.getElementById("rhombus-d2-preinput");
      preD2.innerText = d2;

      // Area of rhombus
      const area = d1 * d2;

      displayAreaData(serialNo, rhombus, area);
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

// table
document
  .getElementById("table-container")
  .addEventListener("click", function (e) {
    const getElement = e.target.rows.innerHTML;
    console.log(getElement);
  });
