let playbtn=document.getElementsByClassName("playbtn")[0];
let song=document.getElementById("currentsong");
let progressed=document.getElementById("progressed");
let progress_bar=document.getElementById("progress_bar");
let outer=document.getElementsByClassName("outer")[0];
let singer_name=document.getElementsByClassName("singer_name")[0];
let intervalId=null;

let isIntervalRunning=false;
let flag=false;
async function playctrl()
{
  
    
    playbtn.classList.toggle("fa-play");
    playbtn.classList.toggle("fa-pause");
    singer_name.classList.toggle("singer_name_animation");
   

        if(playbtn.classList.contains("fa-play")){
            await song.pause();
            clearInterval(intervalId)
        }
        if(playbtn.classList.contains("fa-pause")){
            await song.play();
            intervalId=setInterval(changeShadowSize,500)
        }
        console.log("If")
    

  
   
}

playbtn.addEventListener("click",()=>{
    
    
    playctrl("");
    
    
   
})


song.ontimeupdate=()=>{
    let i=0;
 
    // song.currentTime=0;
    let ctr_time=song.currentTime;
    let full_time=song.duration;
    // console.log("Current time :",ctr_time);
    // console.log("Full time :",full_time);

    let percent=ctr_time/full_time;
    // console.log("Percent :",percent)
    progressed.style.width=100*percent+"%";


    
    progress_bar.addEventListener("click",(e)=>{
       song.currentTime=((e.offsetX/progress_bar.offsetWidth)*song.duration)
    })
    
    
}

let growing=true;

let shadowSize = 0; // Initial shadow size
// Flag to indicate whether the shadow is growing or shrinking

function changeShadowSize() {
    // Increase or decrease shadow size based on flag
    if (growing) {
        shadowSize += 5;
        if (shadowSize >= 30) growing = false;
    } else {
        shadowSize -= 5;
        if (shadowSize ==0) 
        growing = true;
    }
    // Apply new box shadow
    outer.style.boxShadow = `0px 0px 70px ${shadowSize*2}px rgb(148, 138, 239, 0.467)`;
}
// setInterval(changeShadowSize, 100);
// Call the changeShadowSize function every 500 milliseconds

let arr=[
    {filename:"Jeena.mp4",title:"Jeena",image:"Img3.jpg",singer:"Atif Aslam"},
    {filename:"Hasi.mp3",title:"Hasi",image:"Image5.jpg",singer:"Ami Mishra, Kunaal Vermaa, and Shreya Ghoshal"},
    {filename:"Give Me Some Sunshine.mp3",title:"Saari Umr Hum",image:"Image6.jpg",singer:"Sharman Joshi and Suraj Jagan"}
]

let forward=document.getElementsByClassName("fa-forward")[0];
let backward=document.getElementsByClassName("fa-backward")[0];
let i=0;
let title=document.getElementById("song_name");

let image=document.getElementsByClassName("image");
let img_arr= Array.from(image) 
    
forward.addEventListener("click", ()=>{
  i++;
  if(i<arr.length)
  {

      song.setAttribute("src",`./songs/${arr[i].filename}`);
      title.innerHTML=`${arr[i].title}`
      singer_name.innerHTML=`Song By : ${arr[i].singer}`
      
      img_arr.forEach(element => {
        console.log(element);
        element.setAttribute("src",`./images/${arr[i].image}`);
      });
     
      playctrl();
    }
    else{
        song.setAttribute("src",`./songs/${arr[0].filename}`);
        title.innerHTML=`${arr[0].title}`;
        singer_name.innerHTML=`Song By : ${arr[0].singer}`;
        img_arr.forEach(element => {
            console.log(element);
            element.setAttribute("src",`./images/${arr[0].image}`);
          });
        playctrl();
        i=0;
    }
})


backward.addEventListener("click",()=>{
    i--;
    if(i>=0)
    {
        song.setAttribute("src",`./songs/${arr[i].filename}`);
        title.innerHTML=`${arr[i].title}`;
        singer_name.innerHTML=`Song By : ${arr[i].singer}`;
        img_arr.forEach(element => {
            console.log(element);
            element.setAttribute("src",`./images/${arr[i].image}`);
          });
        playctrl(); 
    }
    else{
        song.setAttribute("src",`./songs/${arr[0].filename}`);
        title.innerHTML=`${arr[0].title}`
        singer_name.innerHTML=`Song By : ${arr[0].singer}`;
        img_arr.forEach(element => {
            console.log(element);
            element.setAttribute("src",`./images/${arr[0].image}`);
          });
        playctrl();
        i=0;
    }
})