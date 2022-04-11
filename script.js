
var valDolar=document.getElementById("inputDolar");
var valReal=document.getElementById("inputReal");
var valTax=document.getElementById("inputTaxa");


document.getElementById("btnTax").disabled = false;
document.getElementById("btnReset").disabled = true;
document.getElementById("btnDolar").disabled = true;
document.getElementById("btnReal").disabled =  true;

function taxa(){
if(inputTaxa.value<=0 || inputTaxa.isNaN) {

    alert("Valor não inserio não é valido ou não foi inserido por favor insira algo maior que 0");
    
}
else{
    let input=document.getElementById("inputTaxa").value;
    valTax=parseFloat(input, 10);
    alert(valTax+15);
    document.getElementById("inputTaxa").disabled=true;
    document.getElementById("btnTax").disabled = true;
    document.getElementById("btnDolar").disabled = false;
    document.getElementById("btnReal").disabled =  false;   
    document.getElementById("btnReset").disabled = false;
}



}
function reset(){
    valTax=NaN;
    
    document.getElementById("inputTaxa").disabled=false;
    document.getElementById("btnTax").disabled = false;
    document.getElementById("btnDolar").disabled = true;
    document.getElementById("btnReal").disabled =  true;   
    document.getElementById("btnReset").disabled = true;

}

function converterDolar(){
    if(inputDolar.value<=0 || inputDolar.isNaN) {

        alert("Valor não inserio não é valido ou não foi inserido por favor insira algo maior que 0");
        
    }
    else{
        
        let resultado, input=document.getElementById("inputDolar").value;
        resultado=valTax*input;
        alert("O valor digitado em real é: "+resultado)
    }
}
function converterReal(){
    if(inputReal.value<=0 || inputReal.isNaN) {

        alert("Valor não inserio não é valido ou não foi inserido por favor insira algo maior que 0");
        
    }
    else{
        
        let resultado, input=document.getElementById("inputReal").value;
        resultado=input/valTax;
        alert("O valor digitado em dolar é: "+resultado)
    }
}


