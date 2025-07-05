const service = require('../services/week.service');
const { success, error } = require('../utils/responseHandler');

exports.getByProject = async (req, res) => {
  try {
    const data = await service.getWeekPlanByProject(req.params.projectId);
    success(res, data);
  } catch (err) {
    error(res, err);
  }
};
