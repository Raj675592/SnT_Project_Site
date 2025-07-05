const service = require('../services/tag.service');
const { success, error } = require('../utils/responseHandler');

exports.getAll = async (req, res) => {
  try {
    const data = await service.getAllTags();
    success(res, data);
  } catch (err) {
    error(res, err);
  }
};
