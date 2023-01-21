let count = 0;

const value = document.getElementById("counter");
const buttons = document.querySelectorAll(".button");


buttons.forEach(function (btn) {
  btn.addEventListener("click", function (x){
    console.log(buttons);
    const elementClass = x.currentTarget.classList;
    
    if(elementClass.contains('decrease')){
      count--;
    }
    if(elementClass.contains('reset')){
      count = 0;
    }
    if(elementClass.contains('increase')){
      count++;
    }
    value.textContent = count;
  })
})