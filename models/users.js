/**
 * Created by hamdi_chebbi on 12/03/2016.
 */
var mongoose= require('../config/db.js') ;


var refereeSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: Number,
    age: Number,
    role: String,

    note: Number,
    favorite_teams: String,
    hometown: String,
    picture: String,
    timeline: 
        {
            id_Game1: String,
            title : String,
            date_game: Date,
            description: String
        }
          
})
// le modéle relatif au Schéma -----> lui passer le Schéma
module.exports=mongoose.model('users',refereeSchema) ;
