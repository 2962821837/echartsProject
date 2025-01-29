let express = require("express")
let router = express.Router()

let data = require("../mock/four.json")
router.get("/data", (req, res) => {
    res.send({msg: "第四个接口",data})
})

module.exports = router