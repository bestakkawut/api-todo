const ErrorResponse = require('../../../middleware/errorResponse');
const Task = require('../../../models/Task');


const updateTaskWithID = async (req, res, next) => {
	const { id } = req.params
	const { title, description, status } = req.body;

	try {

		const taskItem = new Task().find(id);

		if (!taskItem || taskItem.length === 0) {
			throw new ErrorResponse("Task not found", 404);
		}

		const params = {
			id: id,
      title: title,
			description: description,
			status: status,
		};
		
		const task = new Task().update(params);

    req.response.result = true;
    req.response.data = task;
    req.response.message = "updateTaskWithID";

    return res.status(200).json(req.response);
  } catch (error) {
    return next(error)
  }
};

module.exports = updateTaskWithID 