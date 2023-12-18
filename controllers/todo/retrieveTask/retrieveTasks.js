const Task = require('../../../models/Task');

const retrieveTasks = async (req, res, next) => {
	try {

		const { archived } = req.query;

		const task = new Task().all()
		req.response.data = task;

		if (archived === 'true') {
			const archivedTask = task.filter(item => item.status !== 'archived')
			req.response.data = archivedTask;
		}

		req.response.result = true;
		req.response.message = "retrieveTasks";

		return res.status(200).json(req.response);
  } catch (error) {
    return next(error)
  }
};

module.exports = retrieveTasks;
