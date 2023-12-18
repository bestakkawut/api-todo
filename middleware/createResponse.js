module.exports = (req, res, next) => {
	Object.assign(req, {
		response: {
			result: false,
			data: null,
			message: null
		}
	});

	next()
}