function crawl_rules(user_rule){
	var parent = user_rule.parent
	delete user_rule.parent
	for (property in user_rule){
		var prop_val = user_rule[property]
		if(typeof(prop_val)!="object"){
			var nodes = prop_val.split("/")
			var str = parent
			for(s in nodes){
				str+=" " + nodes[s]
			}
			user_rule[property] = str
		}
	}
	console.log(user_rule)
	consoe.log("Rules processed.")
	return user_rule
}

module.exports = crawl_rules