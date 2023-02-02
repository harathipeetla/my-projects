let result=document.getElementById("inputext")
let caluculate=(number)=>{
        result.value+=number;
}
let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("enter the valid input")
    }
}


function delet(){
    result.value=result.value.slice(0,-1)
}

function clr(){
    result.value= '0 ';
}        