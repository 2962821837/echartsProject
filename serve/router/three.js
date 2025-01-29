let express = require("express")
let router = express.Router()

let data = require("../mock/three.json")
router.get("/data", (req, res) => {
    res.send({msg: "第三个接口",data})
})

module.exports = router