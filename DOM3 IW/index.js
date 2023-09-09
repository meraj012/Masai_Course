let theForm = document.querySelector("form");
let task = document.getElementById("task");
let priority = document.getElementById("priority");
let tbody = document.querySelector("tbody");

let arr=[]
theForm.addEventListener("submit",function(e){
   e.preventDefault();
    let data={
        task: task.value,
        priority: priority.value,
    }
   arr.push(data);
   
   tbody.innerHTML= null;
   arr.map((ele)=>{
     let tr = document.createElement("tr");
     let td1 = document.createElement("td");
     let td2 = document.createElement("td");
     
     td1.innerText = ele.task;
     td2.innerText = ele.priority;
     
     tr.append(tr.append(td1,td2));
     tbody.append(tr);
     
   })

})

