// File to access different colors in category background
var className=document.getElementsByClassName('rightCard');
var arr1=['red','blue','green','crimson','darkgreen','slategrey'];

var arr2=['red','cyan','orange','pink','darkgrey','crimson'];

var color1=arr1[Math.floor(Math.random()*arr1.length)];
var color2=arr2[Math.floor(Math.random()*arr2.length)];
console.log(color1 );
console.log(color2);
for(let i=0;i<className.length;i++){
    if(i%2==0){
        className[i].style.backgroundColor=color2;
    }else{
        className[i].style.backgroundColor=color1;
    }
    
}
