/*Lista de contactos en JavaScript
Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información 
como objetos:
id
nombres
apellidos
teléfono
ubicaciones
ciudad
dirección
Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-2 y 
compártelo con nosotros. 👍🏼⬇️*/

 /*mi string*/
contactos.toString ();
contactos.join ("-"); /* or contactos.join (""):*/
contactos ='Clara Fuenzalida-Alejandra Aranda-Angel Ramirez-Andrea Conejeros-josé Orellana -Claudio Jorquera-Darío Becerra-Iara Portilla-Cesar Oyarzun-Marina Parada-Monserrat varela-Richard Carrasco '


/*mi array*/

var contactos = ["Clara Fuenzalida" , "Alejandra Aranda" , "Angel Ramirez" , "Andrea Conejeros" , "josé Orellana " ,
        "Claudio Jorquera" , "Darío Becerra" , "Iara Portilla" , "Cesar Oyarzun" , "Marina Parada" , "Monserrat varela" ,
        "Richard Carrasco " ];


/* concatenar listas de información */

const id = ["id1", "id2", "id3", "id4","id5", "id6", "id7", "id8","id9", "id10", "id11", "id12"];
const Name = ["name1", "name2", "name3", "name4","name5", "name6", "name7", "name8","name9",
"name10", "name11", "name12"];
const LastName = ["LastName1", "LastName2", "LastName3", "LastName4","LastName5", "LastName6", "LastName7",
"LastName8","LastName9","LastName10", "LastName11", "LastName12"];
const phone = ["phone1", "phone2", "phone3", "phone4","phone5", "phone6", "phone7", "phone8" ,"phone9",
"phone10", "phone11", "phone12"];
const address =["address1", "address2", "address3", "address4","address5", "address6", "address7", "address8",
"address9", "address10", "address11", "address12"]; /*address incluye: ubicaciones, ciudad, dirección*/

const cotactosFinal = id.concat(Name, LastName, phone, id, address);
/* o const cotactosFinal = contactos.concat(id, phone, address);
console.log(resultado);


/* almacenar información */
this.addphone = function(){
    contactos.splice(1, 0, 'phone');}


/* remover info*/
this.remdata = function(){
    contactos.splice(3, 1);} /*3 numero de datos y 1 La posicion de este*/


/*almacenamiento local de nuevos contactos*/

this.almacenar = function()
{localStorage.setItem('nuevoNombre','patricia Lara');
let miNombre = localStorage.getItem('nuevoNombre');
miNombre
contactos.push(miNombre);}

/*Usar objetos*/

var myContactos = new Object();
myContactos.name = "Clara";
myContactos.LastName = "Fuenzalida";
myContactos.id = "Id1";
myContactos.Phone = "Phone1";
myContactos.Address = "Address1";

/* 
otras formas de anotar los objetos */

/*var myContactos = {
    name : "Clara",
    LastName : "Fuenzalida",
    id = "Id1",
    Phone = "Phone1",
    Address = "Address1",
};

o

myContactos['name']  = 'Clara';
myContactos['LastName'] = 'Fuenzalida';
myContactos['Phone']  = 'Phone1';
myContactos['id'] = 'Id1';
myContactos['Address'] = 'Address1';

*/

/*función para estos objetos*/

function Contactos(Name, LastName, Phone, Id, Address) {
    this.Name = Name;
    this.LastName = LastName;
    this.Phone = Phone;
    this.Id = Id;
    this.Address = Address;
  }

  var mycontactos = new Contactos('Clara', 'Fuenzalida', 'Phone1', 'Id1', 'Address1');

