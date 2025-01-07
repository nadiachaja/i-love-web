console.log('work')

const button = document.querySelector('button')//sla het button element (object) op in een variable

button.addEventListener('click', moveParagraph) //js werkt met de dot-notation, buttonpressed is een callback function 

function moveParagraph () {
   //select paragraph
   const p = document.querySelector('p')
   // add class to paragraph
   p.classList.toggle('move')

   //change custom property setting the opactiy
   p.style.setProperty('opacity', 1)
}




//convenstions 
//uese a neamed callback funtion instead of a anymous function
//use meaningful names for variables and function
//never set styling directtly from js , pass value through a custom property 
//always use a button to trigger a selection 