// fill in javascript code here
let myform=document.querySelector("form");
let empName=document.getElementById("name");
let empId=document.getElementById("employeeID");
let department=document.getElementById("department");
let experience=document.getElementById("exp")
let email=document.getElementById("email");
let mobile=document.getElementById("mbl");
let tbody=document.querySelector("tbody");

let allData=[];


myform.addEventListener("submit",function(event){
    event.preventDefault();

    const data={
        empName: empName.value,
        empId: empId.value,
        department: department.value,
        experience: experience.value,
        email: email.value,
        mobile: mobile.value,
    }
    allData.push(data);
    show()
}) 
 function show(){
    tbody.innerHTML=null;
    allData.map(function mapping(ele,index){
       
       let tr=document.createElement("tr");
       let td1=document.createElement("td");
       let td2=document.createElement("td"); 
       let td3=document.createElement("td"); 
       let td4=document.createElement("td"); 
       let td5=document.createElement("td"); 
       let td6=document.createElement("td"); 
       let td7=document.createElement("td"); 
       let td8=document.createElement("td"); 

       td1.innerText=ele.empName;
       td2.innerText=ele.empId;
       td3.innerText=ele.department;
       td4.innerText=ele.experience;
       td5.innerText=ele.email;
       td6.innerText=ele.mobile;
      
       if(ele.experience>=5) td7.innerText="Senior";
       else if(ele.experience>=2 && ele.experience<5) td7.innerText="Junior";
       else td7.innerText="Fresher";

      let del=document.createElement("button")
      del.innerText="Delete"

      td8.append(del)
      tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
      tbody.append(tr);
      console.log(allData)
      del.addEventListener("click",function(){
        Delete(ele,index);
     })

    })
}


function Delete(ele,index){
    allData.splice(index,1);
    console.log(allData)
    show()
}