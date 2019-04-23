var HTMLParser = require("node-html-parser")

function parser(responses){
	result={}
	for(i in responses){
		response = responses[i]
		if(response.error==null){
			let body = response.response.body
			result[this.urls[i]] = entity_parser(body,this.rules)
		}
		else{
			result[this.urls[i]] = "No result"
		}
	}
	return result
}

function entity_parser(body,rules){
	var result=[]
	var parsed = HTMLParser.parse(body)
	var parent_node = parsed.querySelectorAll(rules.parent)
	for(i in parent_node){
		var entity = {}
		let parent_body = parent_node[i].outerHTML	
		let parsed_parent = HTMLParser.parse(parent_body)
		for(i in rules){
			if(i!="parent"){
				if(typeof(rules[i]) != "object"){
					var query = parsed_parent.querySelector(rules[i])
					entity[i] = query.text
				}
				else{
					entity[i] = entity_parser(parent_body,rules[i])
				}
			}
		}
		result.push(entity)
	}
	return result
}

module.exports = parser