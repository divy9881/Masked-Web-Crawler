var crawl_rules = require("./Scripts/crawl_rules.js")
var commit = require("./Scripts/commit.js")
var start_crawling_with = require("./Scripts/start_crawling_with.js")
var crawl = require("./Scripts/crawl.js")
var parser = require("./Scripts/parser.js")

var crawler = {
	crawl_rules:crawl_rules,
	commit:commit,
	start_crawling_with:start_crawling_with,
	crawl:crawl,
	parser:parser
}

module.exports = crawler