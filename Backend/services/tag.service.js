const db = require('../config/db');

exports.getAllTags = async () => {
  const [rows] = await db.query(`SELECT * FROM Tags`);
  return rows;
};
