
function addNumbers(a:number,b:number):number{
    return a+b;

}


const addNumbersArrow=(a:number,b:number):number=>{
    return a+b;

}


function multiply(firstNumber:number,base:number,secondNumber?:number,){
    return firstNumber*base;

}


interface Character{
    name:string;
    hp:number;
    showHp:()=>void;

}

 const healCharacter=(character:Character,amount:number)=>{
    character.hp+=amount;



 }

 const strider:Character= {
    name:'Strider',
    hp:100,
    showHp(){
        console.log(`HP: ${this.hp}`);
    }

 }

strider.showHp();


export {};