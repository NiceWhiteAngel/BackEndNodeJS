/**
 * Created by hamdi_chebbi on 12/03/2016.
 */
// conection à la base de donnée
var mongoose = require('mongoose') ;

mongoose.connect('mongodb://moetaz.benabdallah:azerty100@ds064718.mlab.com:64718/pimeandb') ;

// accéder à la bd
var db = mongoose.connection ;

// cas d'erreur de connexion
db.on('error',function(error){
    console.log('WARNING --- ** Connection Failed ** ---- WARNING !!! ') ;
    console.log(error) ;
}) ;

// cas de SUCCESS
db.on('open',function(){
    console.log('Niiiiiiiiice --> Connexion à la base de donnée établie ... ') ;
}) ;

module.exports = mongoose ;
