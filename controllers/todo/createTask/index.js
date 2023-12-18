const ErrorResponse = require('../../../middleware/errorResponse');
const Task = require('../../../models/Task');

const createTask = async (req, res, next) => {

  try {
    if (!req.body) {
      throw new ErrorResponse("Missing body", 400);
    }

    const { title, description } = req.body;

    if (!title || !description) {
      throw new ErrorResponse("Missing required fields", 400);
    }

    const params = {
      title: title,
      description: description,
      create_at: new Date()
    };

    const task = new Task().create(params);

    req.response.result = true;
    req.response.data = task;
    req.response.message = "createTask";

    return res.status(200).json(req.response);
  } catch (error) {
    return next(error)
  }
};

module.exports = createTask 