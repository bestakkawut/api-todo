const express = require('express');
const app = express();
const bodyPaser = require('body-parser');

app.use(bodyPaser.json());

const port = 3000;
app.listen(port, () => {
	console.log(`app listening on port ${port}!`);
})

// initiate global variable
require('./store/global')

// setup response
app.use(require('./middleware/createResponse'))

// setup router
app.use(require('./router'))

// setup error
app.use((err, req, res, next) => {
	req.response.result = false;
	req.response.error = {
		code: err.statusCode || 500,
		message: err.message
	}
	return res.status(err.statusCode || 500).send(req.response);
})

// setup 404
app.use((req, res, next) => {
	return res.status(404).send({ message: "404 not found" });
})