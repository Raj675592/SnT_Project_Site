const db = require('../config/db');

exports.getWeekPlanByProject = async (projectId) => {
  const [rows] = await db.query(
    `SELECT * FROM WeekWisePlan WHERE ProjectID = ? ORDER BY Week ASC`,
    [projectId]
  );
  return rows;
};
