let hr=document.getElementById("hr");
       let min=document.getElementById("min");
       let sec=document.getElementById("sec");
      
       let startBtn=document.getElementById("start");
       let stopBtn=document.getElementById("stop");
       let resetBtn=document.getElementById("reset")
   
       startBtn.addEventListener("click",start);
       stopBtn.addEventListener("click",stop);
       resetBtn.addEventListener("click",reset);

      
       
       let temp=null;
       let flag=false;

       function start(){
        flag=true;
        let seconds=sec.value;
        let minutes=min.value;
        let hours=hr.value;
        
        let totalTimeInSeconds = +hours * 3600 + +minutes * 60 + +seconds;
        console.log(+hours+ +minutes+ +seconds)
        console.log(totalTimeInSeconds)
        if(totalTimeInSeconds <= 0){
            alert("Please enter a valid time!");
            return;
        }

        startBtn.disabled=true;

        temp=setInterval(()=>{
         totalTimeInSeconds--;
         let m = Math.floor((totalTimeInSeconds % 3600) / 60);
         let h = Math.floor(totalTimeInSeconds / 3600);
         let s = totalTimeInSeconds % 60;

         document.getElementById("display").innerText=`${formatTime(h)}:${formatTime(m)}:${formatTime(s)}`;
               
        },1000)
       }
       function stop(){
        flag=false;
        clearInterval(temp)
        startBtn.disabled=false;
        
       }
       function reset(){
        flag=false;
        clearInterval(temp)
        document.getElementById("display").innerText="00:00:00"
        startBtn.disabled=false;
       }

       function formatTime(time) {
            return time < 10 ? `0${time}` : time;
        }
       
