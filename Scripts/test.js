var request = require("request")

request("https://www.google.com/search?source=hp&ei=Vdi-XPPgA6fbz7sP28ynoAE&q=hello&btnK=Google+Search&oq=hello&gs_l=psy-ab.3..0i67l2j0i131i67j0i67j0l6.3027.4431..4769...1.0..0.361.1668.0j2j4j1....2..0....1..gws-wiz.....6..35i39j0i131.Y93vTHTtHb0",function(error,response,body){
		if(error){
			console.log(error)
		}
		else{
			console.log(response)
		}
})
