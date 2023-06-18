var detailsRow = null;

function showBookDetails(row) {
  clearDetailsRow();

  var table = document.getElementById("myTable");
  var newRow = table.insertRow(row + 1);
  newRow.className = "book-details";
  var newCell = newRow.insertCell(0);
  newCell.colSpan = "4";
  newCell.innerHTML = "Detalji o knjizi " + row;

  detailsRow = newRow;
}

function showCalculatorDetails(row) {
  clearDetailsRow();

  var table = document.getElementById("myTable");
  var newRow = table.insertRow(row + 1);
  newRow.className = "calculator-details";
  var newCell = newRow.insertCell(0);
  newCell.colSpan = "4";
  newCell.innerHTML = "Obračun plate" + row;
  newCell.innerHTML = "Obračun toplog obroka" + row;
  newCell.innerHTML = "Obračun regresa" + row;

  detailsRow = newRow;
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
