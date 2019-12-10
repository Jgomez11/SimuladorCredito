$(document).ready(function(){
	$('#bt_add').click(function(){
		agregar();
	});
	$('#bt_del').click(function(){
		eliminar(id_fila_selected);
	});
	$('#bt_delall').click(function(){
		eliminarTodasFilas();
	});
	

});
var cont=0;
var id_fila_selected=[];
function agregar(){
	cont++;
	var fila='<tr class="selected" id="fila'+cont+'" onclick="seleccionar(this.id);"><td>'+cont+'</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>';
	$('#tabla').append(fila);
	reordenar();
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

	function eliminar(id_fila){
		/*$('#'+id_fila).remove();
		reordenar();*/
		for(var i=0; i<id_fila.length; i++){
			$('#'+id_fila[i]).remove();
		}
		reordenar();
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
