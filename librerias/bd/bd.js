var motorDb     = require('mysql');
var fs          = require("fs");
var config      = JSON.parse(fs.readFileSync("././config/config.json", "utf8"));

/**
 * @author      [Sebastian.DeLaRoche]
 * @date        [26/09/2015]
 * @description [constructor de la clase BD] 
 */
function BD()
{
    this.oConexion = motorDb.createConnection({
        host     : config.domainBD,
        user     : config.usernameBD,
        password : config.passwordBD,
        database : config.nameBD
    });
}

/**
 * @author      [Sebastian.DeLaRoche]
 * @date        [26/09/2015]
 * @description [Abrir conexion a la base de datos] 
 */

BD.prototype.Conexion = function(){
    this.oConexion.connect(function(error){
        if(error)
        {
            console.error('Error en la conexion a base de datos', error);
            return false;
        }
        console.log("Conexion exitosa a la base de datos");
    });
}

/**
 * @author      [Sebastian.DeLaRoche]
 * @date        [26/09/2015]
 * @description [Cerrar conexion a  base de datos] 
 */

BD.prototype.cerrarConexion = function(){
    this.oConexion.end();
}

/**
 * @author      [Sebastian.DeLaRoche]
 * @date        [26/09/2015]
 * @description [Funcion generica los 4 tipos de transacciones] 
 */

BD.prototype.Query = function(strinSQL, Parametros, fn){
    return this.oConexion.query(strinSQL, Parametros,function(error, results){
        fn(error, results);
    });
}

// Export this file as a module
module.exports = BD;