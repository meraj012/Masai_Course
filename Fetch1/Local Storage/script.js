
let myform=document.querySelector("form");
let nam=document.getElementById("name");
let age=document.getElementById("age");
let tBody=document.querySelector("tbody");

let submitBtn=document.getElementById("submit");
let retrieveBtn=document.getElementById("retrieve");



myform.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let userName=nam.value;
    let userAge=age.value;
    if(userName && userAge){
        localStorage.setItem("name",userName);
        localStorage.setItem("age",userAge);
        alert("Data is added in local storage successfully")
    }else{
        alert("Please enter name & age both")
    }
})

const data= localStorage.getItem("name");

retrieveBtn.addEventListener("click",()=>{
    let trow=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    if(data){
        let name=localStorage.getItem("name");
        let age=localStorage.getItem("age");
      td1.append(name);
      td2.append(age);
      trow.append(td1,td2);
      tBody.append(trow); 
    }
    // else{
    //     alert("Local Storage is empty!")
    // }

    // localStorage.clear("name","age")
})

