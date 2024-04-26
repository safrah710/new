let body=document.querySelector(".king2");
let fname=document.querySelector(".fname");
let lname=document.querySelector(".lname");
let address=document.querySelector(".address");
let type1=document.getElementById("type1");
let type2=document.getElementById("type2");
let type3=document.getElementById("type3");
let type4=document.getElementById("type4");
let country=document.getElementById("king1")
let state=document.querySelector("state");

function store(){
       let tr=document.createElement("tr");
       let td=document.createElement("td");
       td.innerText=fname.value;
       let td1=document.createElement("td");
       td1.innerText=lname.value;
       let td2=document.createElement("td");
       td2.innerText=address.value;
       let td3=document.createElement("td");
       let td4=document.createElement("td");
       for(let i=0;i<2;i++){
        if(i==0){
       if(type1.checked == true){
        td3.innerText=type1.value
       }
       if(type2.checked == true){
        td3.innerText=type1.value
       }
       if(type3.checked == true){
        td3.innerText=type1.value
       }
       if(type4.checked == true){
        td3.innerText=type1.value
       }
    }
    if(i==1){
        if(type1.checked == true){
         td4.innerText=type1.value
        }
        if(type2.checked == true){
         td4.innerText=type1.value
        }
        if(type3.checked == true){
         td4.innerText=type1.value
        }
        if(type4.checked == true){
         td4.innerText=type1.value
        }
     }}
     let td5=document.createElement("td")
     td5.innerText=king1.value;
     let td6=document.createElement("td")
     td6.innerText=king.value;
     tr.appendChild(td);
     tr.appendChild(td1);
     tr.appendChild(td2);
     tr.appendChild(td3);
     tr.appendChild(td4);
     tr.appendChild(td5);
     tr.appendChild(td6);
     body.appendChild(tr)
     fname.value="";
     lname.value="";
     address.value="";
     type1.value=false;
     type2.value=false;
     type3.value=false;
     type4.value=false;
     country.value="india";
     state.value="Tamilnadu";
}
