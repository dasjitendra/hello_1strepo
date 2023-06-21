// program to type a button and show in input
let string ="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{

        //perform a operator //.. from here
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
            //..to  here
        }
        else if(e.target.innerHTML == 'c'){
            string = ""
            document.querySelector('input').value = string;
        }
        else{
        console.log(e.target)

        string = string+ e. target.innerHTML;
        document.querySelector('input').value = string;
    }
    })
})

