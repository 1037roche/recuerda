//GET vista home del software
exports.vistaHome = function(req, res){
	//Objeto con datos para renderizar en la vista
	var oVista = {
		titulo : 'RECUERDA::home'
	};
	
	//Se renderiza la vista
	res.render('home/home', oVista);
}
