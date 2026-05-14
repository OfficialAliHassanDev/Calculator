function calculate(oprate){
let a =Number(document.getElementById('data1').value);
let b =Number(document.getElementById('data2').value);
let result="";
if(a === "" || b === ""){
    alert("plz enter some data");
    return;
}else if(oprate === "+"){
    result=a+b;
}else if(oprate === "-"){
    result=a-b;
}else if(oprate === "*"){
    result=a*b;
}else if(oprate === "/"){
     if(b===0){
            alert('cannot divide by zero')
        }
        result=a/b;
    result=a/b;
}else if(oprate === "%"){
    result=a%b;
}

document.getElementById("result").innerText=result;
document.getElementById("showtable").innerHTML="";
}
function showtable(){
    let a=Number(document.getElementById('data1').value)
    let b=Number(document.getElementById('data2').value)
    let result='';
    if(a===0){
        alert('zero have no table')
        return
    }
    for(let i=1; i<=b; i++){
        result +=a + ' x ' + i + ' = ' + a*i + '<br>'
    }
    document.getElementById('showtable').innerHTML=result
    document.getElementById('result').innerText=''

}
function reset(){
    document.getElementById('result').innerText=''
    document.getElementById('showtable').innerHTML=''
    a=Number(document.getElementById('data1').value='')
    b=Number(document.getElementById('data2').value='')
}