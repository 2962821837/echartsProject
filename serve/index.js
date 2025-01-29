let express = require("express")
let app = express()

app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
	// 千万不要网%%￥￥￥###
	// 千万不要网
	// 千万不要网
	next();
})

let chartOne = require("./router/one")
let chartTwo = require("./router/two")
let chartThree = require("./router/three")
let chartFour = require("./router/four")

app.use("/chartOne", chartOne)
app.use("/chartTwo", chartTwo)
app.use("/chartThree", chartThree)
app.use("/chartFour", chartFour)

app.listen(8848)