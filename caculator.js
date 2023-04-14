const button = document.querySelectorAll('.button');
const display = document.querySelector('.input');

let string ="";


Array.from(button).forEach((button)=>{
    button.addEventListener('click',function(e){
        if(e.target.innerHTML === '='){
            string = eval(string);
            
            display.value = string;
            
        }
        else if(e.target.innerHTML === 'AC'){
            string = " ";
             
            display.value = string
        }
        else if(e.target.innerHTML === 'C'){
            
            
                string = string.slice(0,-1);
                display.value = string
            
            
        }
        else{
            string = string + e.target.innerHTML;
            display.value = string;
        }

        
        
    })
})

//can create functions also of the if else conditions created


