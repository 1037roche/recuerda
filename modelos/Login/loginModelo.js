//Objeto base de datos
var oBaseDatos 		= require('../../librerias/bd/bd.js');


exports.autenticarUsuario = function(aDatos,callback){	

	var oConexion = new oBaseDatos();
	oConexion.Conexion();

	oConexion.Query("SELECT COUNT(*) AS count FROM usuario WHERE usuario = ? AND contrasena = ?;",aDatos, function(error, results){
		try
		{
			//Si hubo algun error en bases de datos manda al catch
			if(error){throw new Error(error);}
			//Si no hay errores ejecuta el callback del controlador
			callback(results[0].count);
		}
		catch(e)
		{
			//Pendiente mostrar error al cliente pues pero controlado
			console.log(e.message);
		}
	});

}


exports.crearUsuario = function(aDatos){
	
	try
	{

	var callbackModelo = function(error, results)
	{
		try
		{
			//Si hubo algun error en bases de datos manda al catch
			if(error){throw new Error(error);}
			//Si no hay errores en base de datos entra a la logica de negocio
			console.log("Se creo");

		}
		catch(e)
		{
			//Pendiente mostrar error al cliente pues pero controlado
			console.log(e.message);
		}			
	};



	var oConexion = new oBaseDatos();
	oConexion.Conexion();
	oConexion.Query("INSERT INTO usuario (nombres, apellidos, usuario, contrasena, telefono, movil, email) VALUES (?,?,?,?,?,?,?)",aDatos, callbackModelo);

	}catch(err)
	{
		throw err;
	}

}


