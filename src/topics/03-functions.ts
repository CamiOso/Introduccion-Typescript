
function addNumbers(a:number,b:number):number{
    return a+b;

}


const addNumbersArrow=(a:number,b:number):number=>{
    return a+b;

}


function multiply(firstNumber:number,base:number,secondNumber?:number,){
    return firstNumber*base;

}

const multi=multiply(2,3);
console.log(multi);

const result:number=addNumbers(1,2);
console.log(result);


export {};