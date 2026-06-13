function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function exp(){
  return (Math.exp);
}
// Additional math functions can be added here as needed.

/* =========================
   EXPORT FOR JEST (Node)
========================= */
if (typeof module !== "undefined") {
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    exp,
    
  };
}

/* =========================
   EXPOSE FOR BROWSER.
========================= */
if (typeof window !== "undefined") {
  window.MathLib = {
    add,
    subtract,
    multiply,
    divide,
    exp,
   
  };
}