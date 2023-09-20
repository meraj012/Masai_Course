let hour=document.getElementById("hr");
    let minut=document.getElementById("min");
    let second=document.getElementById("sec");
    let counter=document.getElementById("count");
    
    let startBtn=document.getElementById("start");
    let stopBtn=document.getElementById("stop");
    let resetBtn=document.getElementById("reset");
    
    startBtn.addEventListener("click",start);
    stopBtn.addEventListener("click",stop);
    resetBtn.addEventListener("click",reset)
    
    let hr=0;
    let min=0;
    let sec=0;
    let count=0;
   
    let temp=null;
    let flag=false;

    function start(){
     flag=true;
     stopWatch();
     startBtn.disabled=true;
     
    }
    function stop(){
     flag=false;
     clearInterval(temp);
     startBtn.disabled=false;
    }
    function reset(){
     flag=false;
     clearInterval(temp);
     startBtn.disabled=false;

     hr=0;
     min=0;
     sec=0;
     count=0;

     counter.innerText="00";
     second.innerText="00";
     minut.innerText="00";
     hour.innerText="00";

    }

    function stopWatch(){
      if(flag==true){
       temp= setInterval(()=>{
          count++;
          if(count==100){
            sec++;
            count=0;
          }
          if(sec==60){
            min++;
            sec=0;
          }
          if(min==60){
            hr++;
            min=0;
          }
          
          let countStr=count;
          let secStr=sec;
          let minStr=min;
          let hrStr=hr;

          if(count<10) countStr="0"+count;
          if(sec<10) secStr="0"+sec;
          if(min<10) minStr="0"+min;
          if(hr<10) hrStr="0"+hr;
         
          counter.innerText=countStr;
          second.innerText=secStr;
          minut.innerText=minStr;
          hour.innerText=hrStr;

        },10)
      }
    }
    