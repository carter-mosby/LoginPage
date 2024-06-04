const express = require('express');
const router = express.Router();
const cors = require('cors');
const { Home, registerUser, loginUser, getProfile } = require('../../controllers/authController');
const { Checkout } = require('../controllers/CheckoutController');


 //middleware

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173',

    })
);

router.get('/', Home);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile) 
router.post('/checkout', Checkout)

module.exports = router;