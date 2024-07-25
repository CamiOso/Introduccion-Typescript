const skills:string[]=['Bash','Counter','Healing'];
interface Character{

    name:string;
    hp:number;
    skills:string[];
    homeTown?:string;

}
const Strider:Character={
    name:'Strider',
    hp:100,
    skills:['Bash','Counter'],
    
}


Strider.homeTown='Gondor';
console.table(Strider);







export {};