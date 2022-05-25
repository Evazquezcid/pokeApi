

const container$$ = document.querySelector('.container')
const search$$ = document.querySelector('.search')
const input$$ = document.querySelector('.inputText')
const liContainer$$ = document.querySelector('.li-container')
const empty$$ = document.querySelector('.empty')
const button$$ = document.querySelector('.btn-add')

console.log(input$$);

let imputValue = input$$.value;

const borrar = (newLi$$) =>{

   newLi$$.remove()


}





const addElement = () => {

 const newLi$$ = document.createElement('li');
 const newP$$ = document.createElement('p');
 const buttonLi$$ = document.createElement('button');


 
 buttonLi$$.textContent = "-" ;
 buttonLi$$.addEventListener ('click', () => borrar (newLi$$));


 newP$$.textContent = input$$.value;

 newLi$$.appendChild(newP$$);
 newLi$$.appendChild(buttonLi$$);
 liContainer$$.appendChild(newLi$$);
 input$$.value = " ";


}


button$$.addEventListener("click", addElement)