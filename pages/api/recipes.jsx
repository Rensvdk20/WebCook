require("dotenv").config();
import mysql from "mysql2/promise";

const pool = mysql.createPool({
	connectionLimit: process.env.DB_CONN_LIMIT,
	host: process.env.DB_HOST,
	database: process.env.DB_DATABASE,
	user: process.env.DB_USER,
});

export default async function handler(req, res) {
	//Get request
	if (req.method == "GET") {
		if (req.query.id) {
			//Get recipe by id
			try {
				const [rows] = await pool.execute(
					"SELECT * FROM recipes WHERE id = ?",
					[req.query.id]
				);

				if (rows.length > 0) {
					res.status(200).json({ status: 200, result: rows[0] });
				} else {
					res.status(404).json({
						status: 404,
						message: "Recipe not found",
					});
				}
			} catch (connErr) {
				res.status(500).json({ error: connErr.message });
			}
		} else {
			//Get all recipes
			try {
				const [rows] = await pool.execute("SELECT * FROM recipes");

				if (rows.length > 0) {
					res.status(200).json({ status: 200, results: rows });
				} else {
					res.status(404).json({
						status: 404,
						message: "No recipes found",
					});
				}
			} catch (connErr) {
				res.status(500).json({ error: connErr.message });
			}
		}
	} else {
		try {
			res.status(405).json({
				error: 400,
				message: "Method not allowed",
			});
		} catch (connErr) {
			res.status(500).json({ error: connErr.message });
		}
	}
}
