let express = require("express")
let router = express.Router()

let data = require("../mock/one.json")
router.get("/data", (req, res) => {
    res.send({msg: "第一个接口",data})
})

module.exports = router