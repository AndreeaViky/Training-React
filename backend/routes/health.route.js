const router = require("express").Router();

// /api/health/
router.get("/", (_, res) => {
    return res.send({
        "success": true, 
        "status": "UP", 
        "date": new Date().toDateString(), 
        "uptime": process.uptime()
    });
})

module.exports = router;