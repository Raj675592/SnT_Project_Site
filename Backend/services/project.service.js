const db = require('../config/db');

exports.getAllProjects = async () => {
  const [rows] = await db.query(`SELECT * FROM Projects`);
  return rows;
};

exports.getProjectsByTag = async (tagId) => {
  const [rows] = await db.query(`
    SELECT p.*
    FROM Projects p
    JOIN ProjectTags pt ON p.ProjectID = pt.ProjectID
    WHERE pt.TagID = ?
  `, [tagId]);
  return rows;
};

exports.getProjectsByClub = async (clubId) => {
  const [rows] = await db.query(`SELECT * FROM Projects WHERE ClubID = ?`, [clubId]);
  return rows;
};
