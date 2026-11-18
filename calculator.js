// Student B (feature/logic): implement calculator behavior in this file.
// For example, read the two inputs and the selected operation.
// Then calculate the result and update #result.

const calculate = document.querySelector('#calculate');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');

calculate.addEventListener('click', () => {
  const n1 = parseFloat(document.getElementById('numberA').value);
  const n2 = parseFloat(document.getElementById('numberB').value);
  const c = document.getElementById('operation').value;

  let r;
  switch(c) {
    case '+':
      r = n1 + n2;
      break;
    case '-':
      r = n1 - n2;
      break;
    case '*':
      r = n1 * n2;
      break;
    case '/':
      r = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero';
      break;
    default:
      r = 'Invalid operation';
      break;
  }
  result.textContent = `Result: ${n1} ${c} ${n2} = ${r}`;
});

reset.addEventListener('click', () => {
  document.getElementById("numberA").value = '2'
  document.getElementById("numberB").value = '3'
  result.textContent = 'Result: not calculated yet';
});
