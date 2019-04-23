var crawler = require("./masked-web-crawler.js")

var nested_rule = crawler.crawl_rules({
	parent:".tag",
	tag:"/"
})

var rule = crawler.crawl_rules({
	parent:".quote",
	quote:"/.text",
	author:"/.author",
	tags:nested_rule
})

crawler.commit(rule)

url = ["http://quotes.toscrape.com/page/1","hello","http://quotes.toscrape.com/page/2"]

crawler.start_crawling_with(url)
async function get_responses(){
	response_promises = await crawler.crawl()
	responses=[]
	for(i in response_promises){
		response = await response_promises[i]
		responses.push(response)
	}
	console.log(crawler)
	result = crawler.parser(responses)
	console.log(result)
}
get_responses()

