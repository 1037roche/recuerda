/* Funciones generales */

/**
 * @author [Sebastian.DeLaRoche]
 * @date   [27/09/2015]
 * @description [submit de un formulario]
 */

function enviarFormulario(){
	var valoresInput = {};
	$(".formulariogeneral").find(':input').each(function(data){
		valoresInput[this.name] = this.value; 
	});
	$.ajax({
		method: "POST",
		url: $(".formulariogeneral")[0].action,
		data: valoresInput,
		beforeSend:function(){},
		success:function(data){
			alert("Transaccion correcta");
		},
		error: function(error){
			alert(error);
		}	
	});
}

/**
 * @author [Sebastian.DeLaRoche]
 * @date   [27/09/2015]
 * @description [cerrar la alerta de los mensajes]
 */
function cerrarAlerta()
{
	$("#mensajeAlerta").hide();
}