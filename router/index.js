const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {

	req.response.result = true;
	req.response.message = 'hello world';

	return res.status(200).send(req.response);
})

router.use('/todo', require('./todo'))

module.exports = router;
