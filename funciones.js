
function calcular_horas_totales(){

	
	horas_totales = obtener_horas() + obtener_horas_finde();
	return horas_totales;
}


function obtener_horas_finde(){
  
  horas_finde = parseInt(document.getElementById("finde").value);
  return horas_finde;

}

function obtener_horas(){
	horas = parseInt(document.getElementById("dias_semana").value);
	total = horas * 8;
	return total;

}


function horas_para_terminar_practica(){
	horas_trabajadas = calcular_horas_totales();
	horas_faltantes = 480 - horas_trabajadas;
	dias_faltantes = horas_faltantes / 8;
	alert("El  total de horas trabajadas es de: " + horas_trabajadas);
	alert("El total de horas faltantes es de: " + horas_faltantes);
	alert("Los dias faltantes si no se trabaja es sabado son: " + dias_faltantes);

}
