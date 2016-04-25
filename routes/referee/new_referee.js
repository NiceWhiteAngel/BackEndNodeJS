/**
 * Created by hamdi_chebbi on 11/03/2016.
 */
var express = require('express');
var router = express.Router();
var models = require('../../models')
var mongoose = require('mongoose') ;

// url du formulaire ! 
router.get('/new_referee',function(req,res){
    if(err){
        console.log(err) ; 
    }
    else{
        res.render('add_referee.twig',{"newref":users});
    }
});




module.exports = router;