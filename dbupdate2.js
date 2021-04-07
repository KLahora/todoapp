const pool = require("./db");

const sql = "UPDATE public.category SET cat_description=$1 WHERE cat_id=4 RETURNING *";

const data = ['SPORTS'];

pool.query(sql,data,(err,res)=>{

    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});
pool.end();