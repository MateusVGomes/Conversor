
const valDolar=document.getElementById("valDolar");
const valReal=document.getElementById("valReal");
const valTax=document.getElementById("valTax");


document.getElementById("btnTax").disabled = false;
document.getElementById("btnDolar").disabled = true;
document.getElementById("btnReal").disabled =  true;

function taxa(){
if(valTaxa.value<=0 || valTaxa.isNaN) {

    alert("Valor não inserio não é valido ou não foi inserido por favor insira algo maior que 0");
    
}
else{
    valTax=document.getElementById("valTax").value;
    alert(valTaxa.value)
    document.getElementById("btnTax").disabled = true;
    document.getElementById("btnDolar").disabled = false;
    document.getElementById("btnReal").disabled =  false;   
}

}

