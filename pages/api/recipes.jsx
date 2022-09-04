require("dotenv").config();
import mysql from "mysql2/promise";

const pool = mysql.createPool({
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	connectionLimit: process.env.DB_CONN_LIMIT,
	ssl: {
		rejectUnauthorized: true,
	},
	waitForConnections: true,
	queueLimit: 0,
	multipleStatements: true,
});

export default async function handler(req, res) {
	let conn = null;

	try {
		conn = await pool.getConnection();
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: 500,
			error: "Couldn't connect to database",
		});

		return;
	}

	//Get request
	if (req.method == "GET") {
		if (req.query.id) {
			//Get recipe by id
			try {
				const [rows] = await conn.execute(
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

					return;
				}
			} catch (connErr) {
				res.status(500).json({ error: connErr.message });
			}
		} else {
			//Get all recipes
			try {
				const [rows] = await conn.execute("SELECT * FROM recipes");

				if (rows.length > 0) {
					res.status(200).json({ status: 200, results: rows });
				} else {
					res.status(404).json({
						status: 404,
						message: "No recipes found",
					});

					return;
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
