# App-Registro-Arboles

Esta aplicación es un proyecto para la CDMX, el cual permite registrar árboles, para que el gobierno pueda tener un mayor control sobre los mismos.

## Configuración

Esta aplicación funciona con un servicio Rest programado en Node.js, usted puede instalar Node.js [aquí](https://nodejs.org/es/).

Posteriormente a su instalación, debe de ir a la carpeta en donde haya descargado este proyecto, entrar en la carpeta NodeRestController y ejecutar en la linea de comandos
`npm star`, si no existe algún problema, usted debería de poder visualizar
algo como esto en la consola:
```
express deprecated app.del: Use app.delete instead
index.js:46:5
API escuchando en el puerto 3000                                                                        
connected
```

Posteriormente, en el código android, se tiene que cambiar la ip de las url de las peticiones al rest controler por la dirección en donde estemos corriendo la aplición en node, esto es debido a que Android no tiene manera directa de conectarse a una base de datos MongoDb.

Una vez completado esto, puede proceder  compilar la aplicación de android, para esto es necesario tener Android Studio instalado y correr la aplicación en un dispositivo emulado o fisico, siempre y cuando cuente con una versión de android superior o igual a 4.4 Kit Kat

### Extras
Esta aplicación coexiste con una aplicación web hecha en react.Js, mediante la cual se debe de hacer el registro de un usuario nuevo para poder hacer el login dentro de la aplicación android.

Podrás encontra la aplicación web [aquí](https://inventario-arboles.netlify.app)

Por otro lado, aquí podrás encontrar repositorio [GitHub](https://github.com/V0100LNET/inventario-arboles)
