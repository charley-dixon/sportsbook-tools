const betAmount = document.getElementById('betAmount');
const oddsFrom = document.getElementById('from');
const oddsTo = document.getElementById('to');
const odds = document.getElementById('odds');
const convert = document.getElementById('convert');
const body = document.querySelector('body');
const outputs = document.getElementById('outputs');
const table = document.querySelector('tbody');
const message = document.getElementById('message');
const resetMessage = message; // making a copy of message to reinsert when the reset functionality goes off
const reset = document.getElementById('reset');
let unit;
let result;
let winnings;
let payout;

convert.addEventListener('click', function(event) {
  // check the selection fields and convert odds accordingly
  // set values for winnings & payout at the same time odds are converted
  if(oddsFrom.value === 'american' && oddsTo.value === 'decimal') {
    result = a2d(Number(odds.value));
    winnings = Number(betAmount.value) * (result - 1);
  } else if(oddsFrom.value === 'decimal' && oddsTo.value === 'american') {
    result = d2a(Number(odds.value));
    winnings = (Number(odds.value) - 1) * Number(betAmount.value); // always multiply by the decimal value it's just easier
  } else if(oddsFrom.value === oddsTo.value) {
    result = odds.value;
    if(oddsFrom.value === 'american') {
      winnings = (a2d(result) - 1) * Number(betAmount.value);
    } else {
      winnings = (Number(odds.value) - 1) * Number(betAmount.value);
    }
  }

  // remove the message that displays to users before any entries are submitted
  message.remove();

  // set the value for these fields upon the click
  unit = Number(betAmount.value);
  payout = winnings + unit;

  // create array of the new data entries
  let entry = [unit.toFixed(2), result, winnings.toFixed(2), payout.toFixed(2)];

  // insert row at end of table
  let newRow = table.insertRow(-1);

  for(let i = 0 ; i < entry.length ; i++) {
    let newCell = newRow.insertCell(i);
    let newText = document.createTextNode(entry[i]);
    newCell.appendChild(newText);
  }
});

// reset functionality
reset.addEventListener('click', function() {
  outputs.appendChild(resetMessage);
  table.innerHTML = '';
  odds.value = '';
  betAmount.value = '';
});

// function converting American to Decimal
function a2d(odds) {
  if(odds < 0) {
    return (1 + (100 / Math.abs(odds))).toFixed(2);
  } else {
    return (1 + (odds / 100)).toFixed(2);
  }
}

// function converting Decimal to American
function d2a(odds) {
  if(odds < 2) {
    return (-1 * (100 / (odds - 1))).toFixed(0);
  } else {
    return '+' + (100 * (odds - 1)).toFixed(0);
  }
}
