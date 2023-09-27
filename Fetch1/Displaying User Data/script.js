let rootContainer=document.getElementById("container");

let fetchBtn=document.getElementById("fetchBtn");
let fetchedData=null;
fetchBtn.addEventListener("click",()=>{

   fetch("https://reqres.in/api/users")
   .then(function(res){
    return res.json();
   })
   .then(function(res){
    fetchedData=res.data;
    console.log(fetchedData)
    displayData(fetchedData)
   })

})

function displayData(data){

    data.forEach((ele)=>{
        
        let elementDiv=document.createElement("div");
        let image=document.createElement("img");
        let name=document.createElement("h3");
        let email=document.createElement("p");
    
        image.src=ele.avatar;
        name.innerText=ele.first_name+ele.last_name;
        email.innerText=ele.email;

        elementDiv.append(image,name,email);
        rootContainer.append(elementDiv);

    })
    
   
    
}