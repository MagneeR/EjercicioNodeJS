var http = require('http');
var fs = require('fs');

var data = fs.readFileSync("index.html", "utf8");
var data1 = fs.readFileSync("generic.html", "utf8");
var data2 = fs.readFileSync("elements.html", "utf8");
var visitasIndex = 0;
var visitasGeneric = 0;
var visitasElements = 0;

http.createServer(function (req,res) {
	switch(req.url) {
		case '/': 
			res.writeHead(200, {"Content-Type" : "text/html;charset = UTF-8"})
			res.write(data);
			visitasIndex +=1;
			break;
		case '/generic':
			res.writeHead(200, {"Content-Type" : "text/html;charset = UTF-8"});
			res.write(data1);
			visitasGeneric+=1;
			break;
		case '/elements':
			res.writeHead(200, {"Content-Type" : "text/html;charset = UTF-8"});
			res.write(data2);
			visitasElements+=1;
			break;
		default:
			res.writeHead(404, {'Content-Type' : 'text/html;charset = UTF-8'});
			res.write("404, Page Not Found");
			break;
	}
	var visitas = " Visitas en Index: " + visitasIndex + "\n" + " Visitas en Generic: " + visitasGeneric + "\n" 
	+ "Visitas en Elements: " + visitasElements + "\n";
	fs.writeFileSync("visitas.txt", visitas);
	var datos = fs.readFileSync("visitas.txt", "utf8");
	console.log(datos)
	res.end();
}).listen(8080);