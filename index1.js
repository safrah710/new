let but=document.querySelector(".but");
let input=document.querySelector(".input");
let n='';
let n1;
let result=0;
let result1=1;
function modify(event) {
      if (!(event.target.value === "+" || event.target.value === "-" || event.target.value === "*" || event.target.value === "/")) {
        n += event.target.value;
        input.value += event.target.value;
    } else if ((event.target.value === "+" || event.target.value === "-" || event.target.value === "*" || event.target.value === "/")) {
        input.value = " ";
        let symbol = event.target.value;
        let n1 = Number(n);
        if (symbol === "+") {
            result = result + n1;
        }
        if (symbol === "-") {
            if (result === 0) {
                result = n1-result;
            } else {
                result = result-n1;
            }
        }
        if (symbol === "*") {
            if (result === 0) {
                result = result1 * n1;
            } else {
                result = result * n1;
            }
        }
        if (symbol === "/") {
            if (result === 0) {
                result = n1 /result1;
            } else {
                result = result / n1;
            }
        }

        n = ''; // Reset n for the next number input
    }
}
function res()
{
    input.value=result;
}
function cl(){
    input.value="";
    n = ''; 
    result = 0; 
    result1 = 1;
}
