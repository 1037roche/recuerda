//Siempre se debe de importar express
var express = require('express');

//Se invoca la funcion de enrutamiento
var router  = express.Router();

/**
 *  @date   26/09/2015
 *  @author [Sebastian.DeLaRoche]
 *	@descripcion Se importan todos los controladores
*/
var oControladorLogin 		= require('../controladores/Login/loginControlador');
var oControladorHome 		= require('../controladores/Home/homeControlador');

//Autoload de comandos con :id
//router.param('id' 								, quizController.load); 		// autoload :id
//router.param('commentId' 						, commentController.load); 		// autoload :commentId

/**
 *  @date   26/09/2015
 *  @author [Sebastian.DeLaRoche]
 *	@modulo Login
*/

//GET vista login
router.get('/login'									, oControladorLogin.validarLogin , oControladorLogin.vistaLogin);
//POST accion de login
router.post('/login'								, oControladorLogin.validarLogin , oControladorLogin.accionLogin);
//GET registrarse en el software
router.get('/registrese'							, oControladorLogin.validarLogin , oControladorLogin.vistaRegistrese);
//POST accion registrase en el software
router.post('/registrese'							, oControladorLogin.validarLogin , oControladorLogin.accionRegistrese);
//GET home del software
router.get('/home'									, oControladorLogin.validarHome  , oControladorHome.vistaHome);


//Se exportan el router para ser previamente utilizado
module.exports = router;