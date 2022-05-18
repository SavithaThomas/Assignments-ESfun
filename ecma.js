
b=[10,20,30,40]

var map = new Map();  
    map.set('John', 'author');  
    map.set('arry', 'publisher');  
    map.set('Mary', 'subscriber');  
    map.set('James', 'Distributor');  

    let colors = new Set(['Green', 'Red', 'Orange', 'Yellow', 'Red']);  
    console.log(colors.size);  
    console.log(colors);  

function func1(...args)
{
    document.getElementById("demo1").innerHTML = args;
}

var hello = function(a,b) {  
      
    document.getElementById("demo2").innerHTML =a+b;   
  }  

  var show = (a, b=200) => {  
    document.getElementById("demo3").innerHTML=a + " " + b;  
}  

function showmap() {
    document.getElementById("demo4").innerHTML=map.size; 
}

function showset() {
    document.getElementById("demo5").innerHTML=colors.size; 
}