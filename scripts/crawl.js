var request_page = require("./request_page")

function request_promise(url){
	return new Promise(function(resolve,reject){
			return resolve(request_page(url))
	})
}

function crawl(){
	urls = this.urls
	var responses = []
	for(i in urls){
		url_no = parseInt(i)+1
		console.log("Crawling "+url_no+" URL ...")
		var res = request_promise(urls[i])
		responses.push(res)
	}
	return new Promise(function(resolve,reject){
		return resolve(responses)
	})
}

module.exports = crawl