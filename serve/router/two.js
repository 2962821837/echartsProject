let express = require("express")
let router = express.Router()

let data = require("../mock/two.json")
router.get("/data", (req, res) => {
    res.send({msg: "第二个接口",data})
})

module.exports = router