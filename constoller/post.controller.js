const pool = require("../database/index")

const postController = {

    // /api/v1/posts
    getAll: async (req,res) => {
        try{
            const [rows, fields] = await pool.query("select * from nodejslearn")
            res.json({
                data:rows
            })

        }catch(error){
            console.log("Error in GetAll =>",error)
            res.json({
                state:error
            })
        }

    },
    getById: async (req,res) => {
        try{
            const { id } = req.params 
            const [rows, fields] = await pool.query("select * from nodejslearn where id = ?",[id])
            res.json({
                data:rows
            })

        }catch(error){
            console.log("Error in getById =>",error)
            res.json({
                state:error
            })
        }

    },
    create: async (req,res) => {
        try{
            const {title,content } = req.body
            const sql = "insert into nodejslearn (title,content) values (?,?)"
            const [rows, fields] = await pool.query(sql,[title,content ])
            res.json({
                data:rows
            })

        }catch(error){
            console.log("Error in create =>",error)
            res.json({
                state:error
            })
        }

    },
    update: async (req,res) => {
        try{
            const {title,content } = req.body
            const { id } = req.params  
            const sql = "update nodejslearn set title = ?, content = ? where id = ?"
            const [rows, fields] = await pool.query(sql,[title,content,id])
            res.json({
                data:rows
            })

        }catch(error){
            console.log("Error in update =>",error)
            res.json({
                state:error
            })
        }
    },
    delete: async (req,res) => {
        try{
            const { id } = req.params  
            const sql = "delete nodejslearn where id = ?"
            const [rows, fields] = await pool.query(sql,[id])
            res.json({
                data:rows
            })

        }catch(error){
            console.log("Error in delete =>",error)
            res.json({
                state:error
            })
        }
    },



}

module.exports = postController