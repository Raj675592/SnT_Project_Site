const service = require('../services/club.service');
const { success, error } = require('../utils/responseHandler');

exports.getAll = async (req, res) => {
  try {
    const data = await service.getAllClubs();
    success(res, data);
  } catch (err) {
    error(res, err);
  }
};
