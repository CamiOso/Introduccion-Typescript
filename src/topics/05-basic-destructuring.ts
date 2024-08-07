interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  detail: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "La cucaracha",
  detail: {
    author: "JOse Miguel",
    year: 2015,
  },
};


const {song:anotherSong,songDuration:duration}=audioPlayer;
console.log(anotherSong);
console.log(duration);


const {detail:{author}}=audioPlayer;

console.log(author);


const dbz:string[]=['Goku','Vegeta','Trunks']
const trunk=dbz[2]|| 'Noexiste';

const[p1,p2,p3]=dbz;


console.error('Personaje 3', trunk);





export {};
