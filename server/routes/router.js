var router = require('express').Router();

router.get('/',function(req,res) {
	res.send("API Worked..!!!");
})

module.exports = router;