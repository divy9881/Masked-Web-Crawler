function Hello(){
	this.hello="HELLO"
}

function Display(){
	console.log(this.hello)
}

function Delete(){
	delete this.func
}

function Traverse(){
	for (property in this){
		console.log(typeof(this[property]))
	}
}
var obj = {
	func:Hello,
	disp:Display,
	del:Delete,
	dummy:{
		name:"Divy"
	},
	trav:Traverse
}

obj.func()
console.log(obj)
obj.disp()
obj.del()
obj.trav()
console.log(obj)
