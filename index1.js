let but=document.querySelector(".but");
let input=document.querySelector(".input");
let n='';
let n1;
let result=0;
let result1=1;
function modify(event) {
     input.value+=event.target.value;
}
function res()
{
    input.value=eval(input.value)
}
function cl(){
    input.value="";
}
