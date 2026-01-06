let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>
    {
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
         else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
         else if(e.target.innerHTML == 'M+'){
            let currentValue=Number(eval(string || 0));
            memory = memory+currentValue;
            console.log("memory:",memory);
        }
         else if(e.target.innerHTML == 'M-'){
            let currentValue=Number(eval(string || 0));
            memory = memory - currentValue;
            console.log("memory:",memory);
        }
        else{
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;}
    })
})