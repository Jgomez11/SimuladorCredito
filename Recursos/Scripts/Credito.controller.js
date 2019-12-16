$(document).ready(function () {
    document.getElementById("btnCalcular").addEventListener('click', calcular, false);
});

function calcular() {
    var tipo = getTipoInteres();

    switch (tipo) {
        case "frances":
            francesa();
            break;

        case "banpais":
            $("#tae").val("23");
            banpais();
            break;
        case "ficohsa":
            $("#tae").val("27");
            banpais();
            break;
        case "aleman":
            aleman();
            break;

        case "americano":
            americano();
            break;

        default:
            break;
    }

    var html = '<button id="btnDescargar" onclick="HTMLtoPDF1()" type="button" class="btn btn-success">Descargar PDF</button>';
    $("#downloadbutton").html(html);
}

function francesa() {
    var data = getData();
    var interesTAE = data.tae / 100;

    var interesCuota = data.periodo * (Math.pow((interesTAE + 1), (1 / data.periodo)) - 1);

    var numerador = (interesCuota / data.periodo) * Math.pow((1 + (interesCuota / data.periodo)), data.numeroCuotas);
    var denominador = (Math.pow((1 + (interesCuota / data.periodo)), data.numeroCuotas) - 1);
    var cuota = (data.valorPrestamo * numerador / denominador);

    $("#cuota").val(cuota.toFixed(2));
    $("#total").val((cuota * data.numeroCuotas).toFixed(2));

    renderizarTablaFrancesa({
        cuota: cuota,
        valorPrestamo: data.valorPrestamo,
        numeroCuotas: data.numeroCuotas,
        interes: interesCuota,
        periodo: data.periodo
    });
}

function aleman() {
    var data = getData();
    var interesTAE = data.tae / 100;

    var interesCuota = data.periodo * (Math.pow((interesTAE + 1), (1 / data.periodo)) - 1);
    var amortizacion = data.valorPrestamo / data.numeroCuotas;
    var cuota = amortizacion + (data.valorPrestamo) * interesCuota / data.periodo;

    $("#cuota").val(cuota.toFixed(2));


    renderizarTablaAlemana({
        cuota: cuota,
        amortizacion: amortizacion,
        valorPrestamo: data.valorPrestamo,
        numeroCuotas: data.numeroCuotas,
        interes: interesCuota,
        periodo: data.periodo
    });
}

function americano() {
    var data = getData();
    var interesTAE = data.tae / 100;

    var interesCuota = data.periodo * (Math.pow((interesTAE + 1), (1 / data.periodo)) - 1);
    var cuota = data.valorPrestamo * interesCuota;

    $("#cuota").val(cuota.toFixed(2));


    renderizarTablaAmericana({
        cuota: cuota,
        valorPrestamo: data.valorPrestamo,
        numeroCuotas: data.numeroCuotas,
        interes: interesCuota,
        periodo: data.periodo
    });
}

function banpais() {
    var data = getData();
    var interesTAE = data.tae / 100;

    var interesCuota = interesTAE / data.periodo;

    var numerador = interesCuota;
    var denominador = 1 - Math.pow((1 / (1 + interesCuota)), data.numeroCuotas);
    var cuota = (data.valorPrestamo * numerador / denominador);

    $("#cuota").val(cuota.toFixed(2));
    $("#total").val((cuota * data.numeroCuotas).toFixed(2));

    renderizarTablaBanpais({
        cuota: cuota,
        valorPrestamo: data.valorPrestamo,
        numeroCuotas: data.numeroCuotas,
        interes: interesCuota
    });
}

function renderizarTablaAlemana(object) {
    $('#tabla').html("");
    
    $('#divChartCap').html("");
    $('#divChartIxA').html("");

    var labels = [0];
    var data = {
        capital: [object.valorPrestamo.toFixed(2)],
        interes: [0],
        amortizacion: [0],
        cuota: [0]
    };

    var html = '<table class="table"><thead class="thead-dark"><tr><th scope="col">Períodos</th><th scope="col">Cuotas</th><th scope="col">Interéses</th><th scope="col">Amortización</th><th scope="col">Capital Pendiente</th></tr></thead><tbody>';
    html += '<tr><th scope="row">0</th><td></td><td></td><td></td><td>' + object.valorPrestamo.toFixed(2) + '</td></tr>';
    
    var interesTemp = 0;
    var interesAcumulado = 0;
    
    for (let i = 0; i < object.numeroCuotas; i++) {
        interesTemp = (object.valorPrestamo) * object.interes / object.periodo;
        object.valorPrestamo -= object.amortizacion;
        interesAcumulado += interesTemp;
        
        labels.push(i + 1);
        data.capital.push(object.valorPrestamo);
        data.interes.push(interesTemp);
        data.amortizacion.push(object.amortizacion);
        data.cuota.push(object.amortizacion + interesTemp);
        
        html += '<tr><th scope="row">' + (i + 1) + '</th><td>' + (object.amortizacion + interesTemp).toFixed(2) + '</td><td>' + interesTemp.toFixed(2) + '</td><td>' + object.amortizacion.toFixed(2) + '</td><td>' + object.valorPrestamo.toFixed(2) + '</td></tr>';
    }

    html += '<tr><th scope="row">Totales:</th><td>' + (interesAcumulado + object.amortizacion * object.numeroCuotas).toFixed(2) + '</td><td>' + interesAcumulado.toFixed(2) + '</td><td>' + (object.amortizacion * object.numeroCuotas).toFixed(2) + '</td><td></td></tr></tbody></table>';
    
    $("#total").val((interesAcumulado + object.amortizacion * object.numeroCuotas).toFixed(2));
    
    $('#tabla').html(html);

    $('#divChartCap').html('<canvas id="chartCapital" height="150" width="300"></canvas>');
    $('#divChartIxA').html('<canvas id="chartInteresxAmortizacion" height="150" width="300"></canvas>');

    renderizarGrafico(labels, data);
}

function renderizarTablaAmericana(object) {
    $('#tabla').html("");
    
    var labels = [0];
    var data = {
        capital: [object.valorPrestamo],
        interes: [0],
        amortizacion: [0],
        cuota: [0]
    };

    var html = '<table class="table"><thead class="thead-dark"><tr><th scope="col">Períodos</th><th scope="col">Cuotas</th><th scope="col">Interéses</th><th scope="col">Amortización</th><th scope="col">Capital Pendiente</th></tr></thead><tbody>';
    html += '<tr><th scope="row">0</th><td></td><td></td><td></td><td>' + object.valorPrestamo.toFixed(2) + '</td></tr>';
    var interesAcumulado = 0;

    for (let i = 0; i < object.numeroCuotas - 1; i++) {
        interesAcumulado += object.cuota;
        labels.push(i + 1);
        data.capital.push(object.valorPrestamo);
        data.interes.push(object.cuota);
        data.amortizacion.push(0);
        data.cuota.push(object.cuota);
        html += '<tr><th scope="row">' + (i + 1) + '</th><td>' + object.cuota.toFixed(2) + '</td><td>' + object.cuota.toFixed(2) + '</td><td>0.00</td><td>' + object.valorPrestamo.toFixed(2) + '</td></tr>';
    }

    interesAcumulado += object.cuota;
    labels.push(object.numeroCuotas);
    data.capital.push(0);
    data.interes.push(object.cuota);
    data.amortizacion.push(object.valorPrestamo);
    data.cuota.push(object.cuota + object.valorPrestamo);
    html += '<tr><th scope="row">' + object.numeroCuotas + '</th><td>' + (object.cuota + object.valorPrestamo).toFixed(2) + '</td><td>' + object.cuota.toFixed(2) + '</td><td>' + object.valorPrestamo.toFixed(2) + '</td><td>0.00</td></tr>';
    html += '<tr><th scope="row">Totales:</th><td>' + (interesAcumulado + object.valorPrestamo).toFixed(2) + '</td><td>' + interesAcumulado.toFixed(2) + '</td><td>' + object.valorPrestamo.toFixed(2) + '</td><td></td></tr></tbody></table>';
    $("#total").val((interesAcumulado + object.valorPrestamo).toFixed(2));
    $('#tabla').html(html);

    renderizarGrafico(labels, data);
}

function renderizarTablaFrancesa(object) {
    $('#tabla').html("");

    $('#divChartCap').html("");
    $('#divChartIxA').html("");

    var html = '<table class="table"><thead class="thead-dark"><tr><th scope="col">Períodos</th><th scope="col">Cuotas</th><th scope="col">Interéses</th><th scope="col">Amortización</th><th scope="col">Capital Pendiente</th></tr></thead><tbody>';
    html += '<tr><th scope="row">0</th><td></td><td></td><td></td><td>' + object.valorPrestamo.toFixed(2) + '</td></tr>';
    
    var interesTemp = 0;
    var interesAcumulado = 0;
    
    var labels = [0];
    var data = {
        capital: [object.valorPrestamo.toFixed(2)],
        interes: [0],
        amortizacion: [0],
        cuota: [0]
    };

    for (let i = 0; i < object.numeroCuotas; i++) {
        interesTemp = object.interes * object.valorPrestamo / object.periodo;
        object.valorPrestamo -= object.cuota - interesTemp;
        interesAcumulado += interesTemp;
        
        labels.push(i + 1);
        data.capital.push(object.valorPrestamo);
        data.interes.push(interesTemp);
        data.amortizacion.push(object.cuota - interesTemp);
        data.cuota.push(object.cuota);
        
        html += '<tr><th scope="row">' + (i + 1) + '</th><td>' + object.cuota.toFixed(2) + '</td><td>' + interesTemp.toFixed(2) + '</td><td>' + (object.cuota - interesTemp).toFixed(2) + '</td><td>' + object.valorPrestamo.toFixed(2) + '</td></tr>';
    }

    html += '<tr><th scope="row">Totales:</th><td>' + (object.cuota * object.numeroCuotas).toFixed(2) + '</td><td>' + interesAcumulado.toFixed(2) + '</td><td>' + (object.cuota * object.numeroCuotas - interesAcumulado).toFixed(2) + '</td><td></td></tr></tbody></table>';

    $('#tabla').html(html);

    $('#divChartCap').html('<canvas id="chartCapital" height="150" width="300"></canvas>');
    $('#divChartIxA').html('<canvas id="chartInteresxAmortizacion" height="150" width="300"></canvas>');

    renderizarGrafico(labels, data);
}

function renderizarTablaBanpais(object) {
    $('#tabla').html("");

    var labels = [0];
    var data = {
        capital: [object.valorPrestamo.toFixed(2)],
        interes: [0],
        amortizacion: [0],
        cuota: [0]
    };

    var html = '<table class="table"><thead class="thead-dark"><tr><th scope="col">Períodos</th><th scope="col">Cuotas</th><th scope="col">Interéses</th><th scope="col">Amortización</th><th scope="col">Capital Pendiente</th></tr></thead><tbody>';
    html += '<tr><th scope="row">0</th><td></td><td></td><td></td><td>' + object.valorPrestamo.toFixed(2) + '</td></tr>';
    var interesTemp = 0;
    var interesAcumulado = 0;
    for (let i = 0; i < object.numeroCuotas; i++) {
        interesTemp = object.interes * object.valorPrestamo;
        object.valorPrestamo -= object.cuota - interesTemp;
        interesAcumulado += interesTemp;

        
        labels.push(i + 1);
        data.capital.push(object.valorPrestamo);
        data.interes.push(interesTemp);
        data.amortizacion.push(object.cuota - interesTemp);
        data.cuota.push(object.cuota);
        
        html += '<tr><th scope="row">' + (i + 1) + '</th><td>' + object.cuota.toFixed(2) + '</td><td>' + interesTemp.toFixed(2) + '</td><td>' + (object.cuota - interesTemp).toFixed(2) + '</td><td>' + object.valorPrestamo.toFixed(2) + '</td></tr>';
    }

    html += '<tr><th scope="row">Totales:</th><td>' + (object.cuota * object.numeroCuotas).toFixed(2) + '</td><td>' + interesAcumulado.toFixed(2) + '</td><td>' + (object.cuota * object.numeroCuotas - interesAcumulado).toFixed(2) + '</td><td></td></tr></tbody></table>';

    $('#tabla').html(html);

    $('#divChartCap').html('<canvas id="chartCapital" height="150" width="300"></canvas>');
    $('#divChartIxA').html('<canvas id="chartInteresxAmortizacion" height="150" width="300"></canvas>');

    renderizarGrafico(labels, data);
}

function getData() {
    var data = {};

    data.valorPrestamo = ($("#valorPrestamo").val() !== "") ? parseFloat($("#valorPrestamo").val()) : 0.00;
    data.tae = ($("#tae").val() !== "") ? parseFloat($("#tae").val()) : 0.00;
    data.numeroCuotas = ($("#numeroCuotas").val() !== "") ? parseFloat($("#numeroCuotas").val()) : 0.00;
    data.periodo = ($("#periodo").val() !== "") ? parseFloat($("#periodo").val()) : 0;

    return data;
}

function getTipoInteres() {
    return ($("#tipoCredito").val() !== "") ? $("#tipoCredito").val() : "frances";
}

function renderizarGrafico(labels, data) {
    var contenedorCapital = document.getElementById('chartCapital');
    var chartCapital = new Chart(contenedorCapital, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Capital Pendiente',
                data: data.capital,
                backgroundColor: 'rgba(91,228,146,0.6)',
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Grafico de Capital Restante'
            },
            layout: {
                padding: 50
            }
        }
    });

    var contenedorIxA = document.getElementById('chartInteresxAmortizacion');
    var chartInteresxAmortizacion = new Chart(contenedorIxA, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Cuota',
                    data: data.cuota,
                    backgroundColor: 'rgba(255, 206, 86, 0.6)',
                    borderWidth: 1
                },
                {
                    label: 'Interes',
                    data: data.interes,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderWidth: 1
                },
                {
                    label: 'Amortizacion',
                    data: data.amortizacion,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderWidth: 1
                }]
        },

        options: {
            title: {
                display: true,
                text: 'Grafico de Interes contra Amortizacion',
            },
            layout: {
                padding: 50
            }
        }
    });
}