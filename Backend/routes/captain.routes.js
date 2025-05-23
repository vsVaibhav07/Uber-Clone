const express = require('express');
const router = express.Router();
const { body} = require('express-validator');
const captainController=require('../controllers/captain.controller'); 
const authMiddleware=require('../middlewares/auth.middleware'); 


router.post('/register',[
    body('fullname.firstname').isLength({min:2}).withMessage('First name must have 2 characters'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({min:6}).withMessage('Password must have at least 6 characters'),
    body('vehicle.color').notEmpty().withMessage('Color is required'),
    body('vehicle.plate').isLength({min:4}).withMessage('Plate number must have 4 characters'),
    body('vehicle.capacity').isLength({min:1}).withMessage('Capacity must be greater than 0')  
],captainController.registerCaptain); 


router.post('/login',[
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({min:5}).withMessage('Password must have at least 5 characters')
],captainController.loginCaptain);

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile); 

router.post('/logout',captainController.logoutCaptain); 




module.exports=router; 