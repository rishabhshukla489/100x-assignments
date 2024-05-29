const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../../03-mongo/db");
const router = Router();
const jwt=require("jsonwebtoken");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username= req.body.username;
    const password= req.body.password;
    await Admin.create({
        username: username,
        password: password
    })
        res.json({
            msg: 'Admin created succesffulyy'
        })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username= req.body.username;
    const password= req.body.password;
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;