var request = require("request")

function request_promise(url){
	return new Promise( function(resolve,reject){
		request(url,function(error,response,body){
			if(error){
				console.log(error)
				var res = {
					err:error,
					response:response
				}
				return resolve(res)
			}
			else{
				console.log("[ "+url+" ]"+" Successfully crawled")
				var res = {
					error:null,
					response:response
				}
				return resolve(res)
			}
		})
	})
}

async function request_page(url){
	var res = await request_promise(url)
	return res
}

module.exports = request_page