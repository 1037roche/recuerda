//Modelo para las transacciones de modulo de login
var oModeloLogin 		= require('../../modelos/Login/loginModelo');

//GET vista login
exports.vistaLogin = function(req, res){
	//Objeto con datos para renderizar en la vista
	var oVista = {
		titulo : 'RECUERDA::Login',
		accion : '/login'
	};

	//Se renderiza la vista
	res.render('login/login', oVista);	
}

//POST accion de logeo
exports.accionLogin = function(req, res, next){

	//Datos para autenticar usuario
	var aDatos = [req.body.usuario, req.body.contrasena];
	//Se llama el modelo encargado de autenticar las credenciales del usuario
	oModeloLogin.autenticarUsuario(aDatos,function(count){

		if(!(count>0))
		{
			//Objeto con datos para renderizar en la vista
			var oVista = {
				titulo : 'RECUERDA::Login',
				accion : '/login',
				mensajeAlerta : {
					clase: "alert-warning",
					mensaje: ["Error en la autenticacion!", "El usuario y/o contraseña no existen"]
				}
			};
			//Se renderiza la vista
			res.render('login/login', oVista);
		}
		else
		{		
			//Guardar datos basicos del usuario en la session
			req.session.usuario = {usuario: req.body.usuario};
			//Redirecciona al home
			res.redirect("/home");
		}
	});
}

exports.vistaRegistrese = function(req, res, next){
	res.render('login/registrese', { 
		titulo: 'RECUERDA::registrese', 
		accion: '/registrese',
		errors: [] 
	});
}

exports.accionRegistrese = function(req, res){

	try
	{

		var aDatos = [req.body.nombres, req.body.apellidos, req.body.usuario, req.body.contrasena, req.body.telefono, req.body.movil, req.body.email];

		oModeloLogin.crearUsuario(aDatos);

	}catch(err)
	{
		console.error("Error: ",err);

	}	
}

exports.validarLogin = function(req, res, next){

	if(!req.session.usuario)
		next();
	else
		res.redirect('/home');
}

exports.validarHome = function(req, res, next){

	if(req.session.usuario)
		next();
	else
		res.redirect('/login');
}