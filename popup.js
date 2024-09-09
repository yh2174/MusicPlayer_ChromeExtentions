let play = document.getElementById("play");
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");
let music = document.getElementById("music");
let image = document.getElementById("image");
let name = document.getElementById("name");
let singer = document.getElementById("singer");

let songs = [
  {
    name: "stay", 
    singer: "JingBurger", 
    music_src: "https://cdn.discordapp.com/attachments/1030456379850371082/1226818836133707776/y2meta.com_-_STAY_COVER_320_kbps.mp3?ex=66262713&is=6613b213&hm=a2c3def56936e0cccb40658b22c0bac6bd907bd999e906bba7865e7f9f4c7bb5&", 
    img_src: "https://media.discordapp.net/attachments/1030456379850371082/1226818873601560656/mqdefault.png?ex=6626271c&is=6613b21c&hm=d263ad4e86993c7a08e2698a43488c769266a235bf08f6423a18fe8916dba1f3&=&format=webp&quality=lossless&width=256&height=144"
  },
  {
    name: "fireworks", 
    singer: "Lilpa X Likpa", 
    music_src: "https://cdn.discordapp.com/attachments/1030456379850371082/1226893242415583252/y2meta.com_-____cover_by_LILPA_X_LIKPA_320_kbps.mp3?ex=66266c5f&is=6613f75f&hm=8976c632102a800fe674834e3f9fcc04ed2642ef23a310585d2dd94efd9b78ea&", 
    img_src: "https://media.discordapp.net/attachments/1030456379850371082/1226893311537709076/artworks-n8Ex61yK2StILlYa-hyidAg-t500x500.png?ex=66266c70&is=6613f770&hm=f826168a752b437366c43acec4f422df123bf957c3e13eb1047c75325c08739c&=&format=webp&quality=lossless&width=280&height=280"
  },
  {
    name: "superhero", 
    singer: "Isegye idol", 
    music_src: "https://cdn.discordapp.com/attachments/1030456379850371082/1226894951405846591/y2meta.com_-_ISEGYE_IDOL_-_Superhero__Ver._320_kbps.mp3?ex=66266df7&is=6613f8f7&hm=a45c3de7bf4f3bd86a8701d451cffa90ea3bb0bda9a2217bd62f8ef916b02c06&", 
    img_src: "https://media.discordapp.net/attachments/1030456379850371082/1226895036743155712/52DC4A28FF5CDA7CC5E2CC6ADC6AF6399834A353.png?ex=66266e0b&is=6613f90b&hm=868c6c5951a4bf596a929afbf7401c6ef34f81f943fd9b044984358d9e72054f&=&format=webp&quality=lossless&width=509&height=286"
  }
];
let i = 0;

forward.addEventListener("click", () => {
  i = (i + 1) % songs.length;
  image.src = songs[i].img_src;
  singer.innerHTML = songs[i].singer;
  name.innerHTML = songs[i].name;
  music.src = songs[i].music_src;
  playmusic();
  
});
backward.addEventListener("click", () => {
  i = (i - 1 + songs.length) % songs.length;
  image.src = songs[i].img_src;
  singer.innerHTML = songs[i].singer;
  name.innerHTML = songs[i].name;
  music.src = songs[i].music_src;
  playmusic();
});


let music_on = false;

let playmusic = () => {
  music_on = true;
  music.play();
  play.classList.remove("fa-circle-play"); // 'fa-circle-play' 클래스 제거
  play.classList.add("fa-pause"); // 'fa-pause' 클래스 추가
  image.classList.add("animate");
}

let pausemusic = () => {
  music_on = false;
  music.pause();
  play.classList.remove("fa-pause"); // 'fa-pause' 클래스 제거
  play.classList.add("fa-circle-play"); // 'fa-circle-play' 클래스 추가
  image.classList.remove("animate");
}
play.addEventListener("click", () => {
  if (music_on) {
    pausemusic();
  } else {
    playmusic();
  } 
})