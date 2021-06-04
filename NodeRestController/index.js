var express = require('express') //llamamos a Express
var app = express()
var mongoose = require('mongoose');
var User = require('./models/user.js');
var {PythonShell} = require('python-Shell');
 SALT_WORK_FACTOR = 10;

var port = process.env.PORT || 3000  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })
})

app.get('/usuario', function(req, res) {
  var email = req.query.email;
  var pass = req.query.password;
  console.log(email);
   User.findOne({email: email}).exec(function(err, user) {
      if (err) throw err;
      var options = {
        mode: 'text',
        pythonPath: '',
        pythonOptions: ['-u'],
        scriptPath: './',
        args: [user.password,pass]
      };

      PythonShell.run('script.py', options, function (err, results) {
        if (err) throw err;
        console.log(results)
          if(results[0]=="True"){
            res.json(user)
          }else{
            res.json()
          }
        // Results is an array consisting of messages collected during execution
      });
  });
})


app.post('/', function(req, res) {
  res.json({ mensaje: 'Método post' })
});

app.del('/', function(req, res) {
  res.json({ mensaje: 'Método delete' })
});



// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)
// colocamos la url de conexión local y el nombre de la base de datos
mongoose.connect('mongodb+srv://root:raiz04@cluster0.h17jg.mongodb.net/inventario-igs', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // enlaza el track de error a la consola (proceso actual)
db.once('open', () => {
  console.log('connected'); // si esta todo ok, imprime esto
});
