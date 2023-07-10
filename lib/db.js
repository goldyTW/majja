// db.js
import mysql from 'serverless-mysql';

console.log(process.env.NEXT_APP_DATABASE_PORT)
const db = mysql({
  config: {
    host: process.env.NEXT_APP_DATABASE_HOST,
    port: process.env.NEXT_APP_DATABASE_PORT,
    database: process.env.NEXT_APP_MYSQL_DATABASE,
    user: process.env.NEXT_APP_MYSQL_USER,
    password: process.env.NEXT_APP_MYSQL_PASSWORD
  }
});

export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}