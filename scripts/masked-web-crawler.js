var crawl_rules = require("./crawl_rules.js")
var commit = require("./commit.js")
var start_crawling_with = require("./start_crawling_with.js")
var crawl = require("./crawl.js")
var parser = require("./parser.js")

var crawler = {
	crawl_rules:crawl_rules,
	commit:commit,
	start_crawling_with:start_crawling_with,
	crawl:crawl
	parser:parser
}

module.exports = crawler