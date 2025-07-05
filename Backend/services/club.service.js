const db = require('../config/db');

exports.getAllClubs = async () => {
  const [rows] = await db.query(`SELECT * FROM Clubs`);
  return rows;
};
