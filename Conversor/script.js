
var valDolar=document.getElementById("inputDolar");
var valReal=document.getElementById("inputReal");
var valTax=document.getElementById("inputTaxa");


document.getElementById("btnTax").disabled = false;
document.getElementById("btnDolar").disabled = true;
document.getElementById("btnReal").disabled =  true;

function taxa(){
if(inputTaxa.value<=0 || inputTaxa.isNaN) {

    alert("Valor não inserio não é valido ou não foi inserido por favor insira algo maior que 0");
    
}
else{
    var input=document.getElementById("inputTaxa").value;
    valTax=input;
    alert(valTax);
    document.getElementById("btnTax").disabled = true;
    document.getElementById("btnDolar").disabled = false;
    document.getElementById("btnReal").disabled =  false;   
    
}

}

