$(document).ready(function(){
	$('#bt_add').click(function(){
		agregar();
	});
	$('#bt_delall').click(function(){
		eliminarTodasFilas();
	});
	$('#btnCal').click(function(){
		calcular();
	});

});

var cont=0;
var montoTotal=0;
var id_fila_selected=[];
function agregar(){
    cont++;
    montoTotal = parseInt(montoTotal) + parseInt($("#monto").val());
	var fila='<tr class="selected" id="fila'+cont+'" onclick="seleccionar(this.id);"><td>'+cont+
			'</td><td>'+ $("#inst").val() +
			'</td><td>'+ $("#monto").val() +'</td></tr>';
	$('#tabla').append(fila);
	reordenar();

	$("#inst").val("");
	$("#monto").val("");
}

function calcular (){
	var interes1 = Math.floor((Math.random() * (17 - 14)) + 14)/100;
   	var interes2 = Math.floor((Math.random() * (17 - 14)) + 14)/100;
    var arreycuotas = [24,36,48];
	var periodo = 12;
	var numeroCuotas1 = arreycuotas[Math.floor((Math.random() * (3 - 0)) + 0)];
	var numeroCuotas2 = arreycuotas[Math.floor((Math.random() * (3 - 0)) + 0)];

	//Se puede simplificar

	var interesCuota1 = periodo * (Math.pow((interes1 + 1), (1 / periodo)) - 1);
	var numerador1 = (interesCuota1 / periodo) * Math.pow((1 + (interesCuota1 / periodo)), numeroCuotas1);
	var denominador1 = (Math.pow((1 + (interesCuota1 / periodo)), numeroCuotas1) - 1);
	var cuota1 = (montoTotal * numerador1 / denominador1);

	var interesCuota2 = periodo * (Math.pow((interes2 + 1), (1 / periodo)) - 1);
	var numerador2 = (interesCuota2 / periodo) * Math.pow((1 + (interesCuota2 / periodo)), numeroCuotas2);
	var denominador2 = (Math.pow((1 + (interesCuota2 / periodo)), numeroCuotas2) - 1);
	var cuota2 = (montoTotal * numerador2 / denominador2);

	if($("#sd").val()>cuota1 && $("#sd").val()>cuota2){

	    $("#montoA").val(montoTotal);

	    renderizarTablaFrancesa1({
	        cuota: cuota1,
	        valorPrestamo: montoTotal,
	        numeroCuotas: numeroCuotas1,
	        interes: interesCuota1,
	        intbx: interes1,
	        periodo: periodo
	    });

	    renderizarTablaFrancesa2({
	        cuota: cuota2,
	        valorPrestamo: montoTotal,
	        numeroCuotas: numeroCuotas2,
	        interes: interesCuota2,
	        intby: interes2,
	        periodo: periodo
	    });

	    var html = '<button onclick="HTMLtoPDF2()" type="button" class="btn btn-success">Descargar PDF</button>';
		$('#downloadbutton').html(html);
	}else {
		alert("El monto del salario débe ser mayor a la cuota a pagar, ya que deducción se hace por planilla.");
		};
}

function renderizarTablaFrancesa1(object) {
    $('#tablaC1').html("");

   	var html = '<h4>Banco X, Ofrece:</h4><p>Interés: '+ (object.intbx*100).toFixed(2) +'%</p>';
	html += '<p>Número de Cuotas: '+ object.numeroCuotas +'</p>';
	html += '<table class="table"><thead class="thead-dark"><tr><th scope="col">Períodos</th><th scope="col">Cuotas</th><th scope="col">Interéses</th><th scope="col">Amortización</th><th scope="col">Capital Pendiente</th></tr></thead><tbody>';
	html += '<tr><th scope="row">0</th><td></td><td></td><td></td><td>' + object.valorPrestamo + '</td></tr>';

	var interesTemp = 0;
	var interesAcumulado = 0;
	    
	var labels = [0];
	var data = {
	    capital: [object.valorPrestamo],
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
	    data.amortizacion.push(object.cuota1 - interesTemp);
	    data.cuota.push(object.cuota);
	        
	    html += '<tr><th scope="row">' + (i + 1) + '</th><td>' + object.cuota.toFixed(2) + '</td><td>' + interesTemp.toFixed(2) + '</td><td>' + (object.cuota - interesTemp).toFixed(2) + '</td><td>' + object.valorPrestamo.toFixed(2) + '</td></tr>';
	}

	html += '<tr><th scope="row">Totales:</th><td>' + (object.cuota * object.numeroCuotas).toFixed(2) + '</td><td>' + interesAcumulado.toFixed(2) + '</td><td>' + (object.cuota * object.numeroCuotas - interesAcumulado).toFixed(2) + '</td><td></td></tr></tbody></table>';

    $('#tablaC1').html(html);

}

function renderizarTablaFrancesa2(object) {
    $('#tablaC2').html("");

   	var html = '<h4>Banco Y, Ofrece:</h4><p>Interés: '+ (object.intby*100).toFixed(2) +'%</p>';
	html += '<p>Número de Cuotas: '+ object.numeroCuotas +'</p>';
	html += '<table class="table"><thead class="thead-dark"><tr><th scope="col">Períodos</th><th scope="col">Cuotas</th><th scope="col">Interéses</th><th scope="col">Amortización</th><th scope="col">Capital Pendiente</th></tr></thead><tbody>';
	html += '<tr><th scope="row">0</th><td></td><td></td><td></td><td>' + object.valorPrestamo + '</td></tr>';

	var interesTemp = 0;
	var interesAcumulado = 0;
	    
	var labels = [0];
	var data = {
	    capital: [object.valorPrestamo],
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
	    data.amortizacion.push(object.cuota1 - interesTemp);
	    data.cuota.push(object.cuota);
	        
	    html += '<tr><th scope="row">' + (i + 1) + '</th><td>' + object.cuota.toFixed(2) + '</td><td>' + interesTemp.toFixed(2) + '</td><td>' + (object.cuota - interesTemp).toFixed(2) + '</td><td>' + object.valorPrestamo.toFixed(2) + '</td></tr>';
	}

	html += '<tr><th scope="row">Totales:</th><td>' + (object.cuota * object.numeroCuotas).toFixed(2) + '</td><td>' + interesAcumulado.toFixed(2) + '</td><td>' + (object.cuota * object.numeroCuotas - interesAcumulado).toFixed(2) + '</td><td></td></tr></tbody></table>';

    $('#tablaC2').html(html);

}

function seleccionar(id_fila){
	if($('#'+id_fila).hasClass('seleccionada')){
		$('#'+id_fila).removeClass('seleccionada');
	}
	else{
		$('#'+id_fila).addClass('seleccionada');
	}
	//2702id_fila_selected=id_fila;
	id_fila_selected.push(id_fila);
}

function reordenar(){
	var num=1;
	$('#tabla tbody tr').each(function(){
		$(this).find('td').eq(0).text(num);
		num++;
	});
}

function eliminarTodasFilas(){
	$('#tabla tbody tr').each(function(){
		$(this).remove();
	});

}