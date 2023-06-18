var detailsRow = null;

  
  function showCalculatorDetails(row) {
  clearDetailsRow();  
  // Check if the details row already exists
  var existingRow = document.querySelector(".calculator-details");
  if (existingRow) {
    return; // Exit the function if the row already exists
  }

  var table = document.getElementById("myTable");
  var newRow, newCell, newLink;

  newRow = table.insertRow(row + 1);
  newRow.className = "calculator-details";
  newCell = newRow.insertCell(0);
  newCell.colSpan = "4";
  newLink = document.createElement("a");
  newLink.href = "kalkulator-jubilarne-nagrade.html"; // Replace with the actual URL of the page you want to open
  newLink.textContent = "Обрачун јубиларне награде";
  newCell.appendChild(newLink);

  newRow = table.insertRow(row + 2);
  newRow.className = "calculator-details";
  newCell = newRow.insertCell(0);
  newCell.colSpan = "4";
  newLink = document.createElement("a");
  newLink.href = "kalkulator-regresa.html"; // Replace with the actual URL of the page you want to open
  newLink.textContent = "Обрачун регреса";
  newCell.appendChild(newLink);

  newRow = table.insertRow(row + 3);
  newRow.className = "calculator-details";
  newCell = newRow.insertCell(0);
  newCell.colSpan = "4";
  newLink = document.createElement("a");
  newLink.href = "kalkulator-toplog-obroka.html"; // Replace with the actual URL of the page you want to open
  newLink.textContent = "Обрачун топлог оброка";
  newCell.appendChild(newLink);
  
  newRow = table.insertRow(row + 4);
  newRow.className = "calculator-details";
  newCell = newRow.insertCell(0);
  newCell.colSpan = "4";
  newLink = document.createElement("a");
  newLink.href = "kalkulator-plate.html"; // Replace with the actual URL of the page you want to open
  newLink.textContent = "Обрачун плате";
  newCell.appendChild(newLink);
}



function clearDetailsRow() {
  if (detailsRow !== null) {
    var table = document.getElementById("myTable");
    table.deleteRow(detailsRow.rowIndex);
    detailsRow = null;
  }
}



function openLicnaprimanja() {
  window.location.href = "licnaprimanja.html";
}

function closeLicnaprimanja() {
  window.location.href = "index.html";
}

function openZakonoradu() {
  window.location.href = "../finansije/dokumenti/zakon-o-radu.html";
}

function closeZakonoradu() {
  window.location.href = "../index.html";
}
