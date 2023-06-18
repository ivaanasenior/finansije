var detailsRow = null;

  
  function showCalculatorDetails(row) {
  clearDetailsRow();  
  // Check if the details row already exists
  var existingRow = document.querySelector(".calculator-details");
  if (existingRow) {
    return; // Exit the function if the row already exists
  }

  var table = document.getElementById("myTable");
  var newRow, newCell;

  newRow = table.insertRow(row + 1);
  newRow.className = "calculator-details";
  newCell = newRow.insertCell(0);
  newCell.colSpan = "4";
  newCell.innerHTML = "Обрачун јубиларне награде";

  newRow = table.insertRow(row + 2);
  newRow.className = "calculator-details";
  newCell = newRow.insertCell(0);
  newCell.colSpan = "4";
  newCell.innerHTML = "Обрачун регреса";

  newRow = table.insertRow(row + 3);
  newRow.className = "calculator-details";
  newCell = newRow.insertCell(0);
  newCell.colSpan = "4";
  newCell.innerHTML = "Обрачун топлог оброка";
  
  newRow = table.insertRow(row + 4);
  newRow.className = "calculator-details";
  newCell = newRow.insertCell(0);
  newCell.colSpan = "4";
  newCell.innerHTML = "Обрачун плате";
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
