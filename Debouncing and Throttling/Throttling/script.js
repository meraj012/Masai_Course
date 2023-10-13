let timeout=null;
document.getElementById("searchFood").addEventListener("input",function (){
    clearTimeout(timeout)
    let query = document.getElementById("searchFood").value;

    timeout = setTimeout(function(){
        searchMeal(query)
    },1000)
})

function searchMeal(query){
   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then((response) => response.json())
    .then((data) => {
      displayMeals(data.meals);
    })
    .catch((error)=>{
        console.log(error);
    })
}

function displayMeals(meals){
    console.log(meals)
    let list= document.getElementById("foodContainer");
    list.innerHTML='';
    if(meals){
        meals.forEach((recipe)=>{
            list.innerHTML += `<div>
            <h3>${recipe.strMeal}</h3>
            <img src="${recipe.strMealThumb}" alt="Meal logo" width="200px">
            </div>`
        })
    }else{
        list.innerHTML = "<p>No meal found!<p>";
    }
}