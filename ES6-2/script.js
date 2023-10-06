  //custom Array
  function myArray(...para){
    this.size=para.length;


    for(let i=0; i<para.length; i++){
       this[i]= para[i];
    }
 }

 myArray.prototype.push=function(ele){
       this[this.size]=ele;
       this.size++;
       
 }

 myArray["prototype"]["pop"]=function(){
     delete this[this.size-1];
     this.size--; 
 }

 myArray.prototype.top=function(){
     console.log(this[this.size-1]);
 }

 myArray.prototype.print= function(){
     let arr=[];
      for(let i=0; i<this.size; i++){
         arr.push(this[i]);
      }

      console.log(arr)
 }

 myArray.prototype.printReverse=function(){
     let arr=[];
     for(let i=this.size-1; i>=0; i--){
         arr.push(this[i]);
     }
     console.log(arr)
 }

 myArray.prototype.Size = function(){
     console.log(this.size);
 }

 let stack = new myArray(2,4,6,8,10);
 console.log(stack);

 stack.push(12);
 stack.print();

 stack.pop();
 stack.print();

 stack.top();

 stack.print();

 stack.printReverse();

 stack.Size();
 