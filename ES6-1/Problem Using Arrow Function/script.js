let arr=["MA", "SA", "I", "SCH", "OOL"];

let characterInLowerCase = char => {
   return(char.toLowerCase())    
}
 
let wordInLowerCase = word => {
    let str=''
    for(let i=0; i<word.length; i++){
        str+=characterInLowerCase(word[i])
    }
    return str;
}

let arrOfStrInLowerCase = arr =>{
    let newArr=[];
    for(let i=0; i<arr.length; i++){
      newArr.push(wordInLowerCase(arr[i]))
    }
    return newArr;
}

console.log( arrOfStrInLowerCase(arr));

