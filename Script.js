document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");

  // Handle number/operator buttons
  const valueButtons = document.querySelectorAll("button[data-value]");
  valueButtons.forEach(button => {
    button.addEventListener("click", () => {
      display.value += button.getAttribute("data-value");
    });
  });

  // Equals
  document.getElementById("btnEquals").addEventListener("click", () => {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  });

  // Clear
  document.getElementById("btnClear").addEventListener("click", () => {
    display.value = "";
  });

  // Backspace
  document.getElementById("btnBackspace").addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
  });

  // Square root
  document.getElementById("btnSqrt").addEventListener("click", () => {
    const value = parseFloat(display.value);
    display.value = isNaN(value) ? "Error" : Math.sqrt(value);
  });

  // Square
  document.getElementById("btnSquare").addEventListener("click", () => {
    const value = parseFloat(display.value);
    display.value = isNaN(value) ? "Error" : Math.pow(value, 2);
  });

  // Theme toggle
  document.getElementById("themeToggle").addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
  });
});
