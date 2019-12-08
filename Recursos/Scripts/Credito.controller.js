$(document).ready(function () {
    document.getElementById("btnCalcular").addEventListener('click', calcular, false);
});

function calcular() {
    var data = getData();
    var interesTAE = data.tasaAnualEf / 100;

    var interesCuota = data.periodo * (Math.pow((interesTAE + 1), (1 / data.periodo)) - 1);

    var numerador = (interesCuota / data.periodo) * Math.pow((1 + (interesCuota / data.periodo)), data.numeroCuotas); 
    var denominador =(Math.pow((1 + (interesCuota / data.periodo)), data.numeroCuotas) - 1);
    var cuota = data.valor * numerador / denominador;
    
    $("#cuota").val(cuota);
    $("#total").val(cuota * data.numeroCuotas);
}

function getData() {
    var data = {};
    
    data.valor = ($("#vp").val() !== "") ? parseFloat($("#vp").val()) : 0.00;
    data.tasaAnualEf = ($("#tae").val() !== "") ? parseFloat($("#tae").val()) : 0.00;
    data.numeroCuotas = ($("#nc").val() !== "") ? parseFloat($("#nc").val()) : 0.00;
    data.periodo = ($("#periodo").val() !== "") ? parseFloat($("#periodo").val()) : 0;

    return data;
}