// El programa se corre con 'npm start'

const express= require ('express');
const app= express();
const path = require('path');


// settings
app.set('port', process.env.PORT || 3000);  // 'Alt+124' es para la barra vertical

app.use(express.static(path.join(__dirname, 'public')));
/*app.use(express.static(path.join(__dirname, '/public/css'))); */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// middlewares


// Routes
/*app.get('/', (req, res)=> res.send('Hola 2024')); */
app.get('/', (req, res)=> {

	console.log('Esta es una prueba 2024');

	//los objetos json siempre empiezan con parentesis {}
	//los arrays siempre empiezan con corchetes []

	res.json({     //Este objeto JSON se mostrara en el navegador como un 'objeto json' y no en la consola

		"name": "jose mendoza",
		"edad": 49,
		"direccion": "453 broken bow, Apt 1602",
		"calificaciones": [85, 30, 65]
	})  



	let dato= {     //Este objeto JSON se mostrara como un 'object' en la consola

		name: "Pepo",
		edad: 4,
		direccion: "Altagracia, managua",
		calificaciones: [4, 30, 65]
	}

	console.log(typeof dato);
	console.log(dato);   // se mostrara como un objeto javascript



	const cars= `[
		{
			"marca": "Honda",
			"ano": 2018,
			"millas": 135000
		}, {
			"marca": "Suzuki",
			"ano": 2022,
			"millas": 85000
		}

	]`

	console.log(typeof cars);
	console.log(cars);     // se mostrara como un string objeto json

	/*res.render('index') */
});
 

app.listen(app.get('port'), ()=> {

	console.log("Servidor en puerto 3000");
})