var HTMLParser = require("node-html-parser")

var parsed = HTMLParser.parse("<ul id='list'><li>Hello World</li></ul>")

var li = parsed.querySelector("#list  li")
console.log(li.text)