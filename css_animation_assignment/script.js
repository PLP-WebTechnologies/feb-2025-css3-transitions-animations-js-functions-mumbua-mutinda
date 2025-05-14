
document.addEventListener("DOMContentLoaded", () => {
    const bgColorSelect = document.getElementById("bgColorSelect");
    const storedColor = localStorage.getItem("bgColor");
  
  
    if (storedColor) {
      document.body.style.backgroundColor = storedColor;
      bgColorSelect.value = storedColor;
    }
  
  
    bgColorSelect.addEventListener("change", (event) => {
      const selectedColor = event.target.value;
      document.body.style.backgroundColor = selectedColor;
      localStorage.setItem("bgColor", selectedColor); 
    });
  });
  

  document.getElementById("animateBtn").addEventListener("click", () => {
    const animatedBox = document.getElementById("animatedBox");
  
 
    animatedBox.classList.remove("animateBox");
  
   
    void animatedBox.offsetWidth; 
    animatedBox.classList.add("animateBox");
  });
  
 
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    .animateBox {
      animation: boxAnimation 2s forwards;
    }
  `, styleSheet.cssRules.length);
  