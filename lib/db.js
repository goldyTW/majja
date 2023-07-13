// import mysql from 'serverless-mysql';
import mysql2 from 'mysql2';

const db = mysql2.createPool({
  // host: process.env.NEXT_APP_DATABASE_HOST,
  // port:  process.env.NEXT_APP_DATABASE_PORT,
  // database:  process.env.NEXT_APP_MYSQL_DATABASE,
  // user:  process.env.NEXT_APP_MYSQL_USER,
  // password:  process.env.NEXT_APP_MYSQL_PASSWORD
  host: '127.0.0.1',
  port: '3306',
  database: 'majja',
  user: 'root',
  password: ''
});

// const db = mysql({
//   config: {
//     host: '203.161.53.80',
//     port: '3307',
//     database: 'majja_db',
//     user: 'majja_user',
//     password: 'majja_dev_db_3124535'
//   }
// });

export default async function excuteQuery({ query, values }) {
  try {
    const promisePool = db.promise();
    const [rows,fields] = await promisePool.query(query, values);
    return rows;
  } catch (error) {
    return { error };
  }
}