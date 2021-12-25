
let filterInput = document.getElementById("filterInput");

filterInput.addEventListener("keyup", searchFunction);

function searchFunction(){

let filterInput_value = document.getElementById("filterInput").value.toUpperCase();

let ul = document.getElementById("names");

let li = ul.querySelectorAll("li.collection-item");


for(let i = 0; i < li.length; i++){

 let a = li[i].getElementsByTagName("a")[0];
  
  if(a.innerHTML.toUpperCase().indexOf(filterInput_value) > -1){
    li[i].style.display = "";
  }else{
    li[i].style.display = "none";
  }
  
  
  }//forloop 






}//function








