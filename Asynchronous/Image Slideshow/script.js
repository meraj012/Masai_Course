let img=document.querySelector("img");
let pre=document.getElementById("pre");
let nex=document.getElementById("next");
let stp=document.getElementById("stop");
let strt=document.getElementById("start");

pre.addEventListener("click",previous);
nex.addEventListener("click",next);
stp.addEventListener("click",stop);
strt.addEventListener("click",start);

let images=["Images/img1.jpeg","Images/img2.jpeg","Images/img3.jpeg","Images/img4.jpeg","Images/img5.jpeg","Images/img6.jpeg","Images/img7.jpeg","Images/img8.jpeg","Images/img9.jpeg","Images/img10.jpeg","Images/img11.jpeg","Images/img12.jpeg","Images/img13.jpeg","Images/img14.jpeg","Images/img15.jpeg","Images/img16.jpeg","Images/img17.jpeg","Images/img18.jpeg","Images/img19.jpeg","Images/img20.jpeg"];
let currentImg=0;

let slideInterval=null;


slideInterval=setInterval(slider,2500);

function slider(){
   
    
    img.setAttribute("src",images[currentImg])
    currentImg++;
    if(currentImg==images.length){
        currentImg=0
    }
}

function previous(){
  
    clearInterval(slideInterval);
    currentImg--;
    if(currentImg==-1){
        currentImg=images.length-1;
    }
    img.setAttribute("src",images[currentImg])

}
function next(){
  
    clearInterval(slideInterval);
    currentImg++;
    if(currentImg==images.length){
        currentImg=0
    }
    img.setAttribute("src",images[currentImg])
}

function stop(){
  
    clearInterval(slideInterval);
  
}

function start(){
    
   setInterval(slider,2500)

   
}
