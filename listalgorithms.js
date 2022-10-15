
/*Entregable: Lista de contactos ordenada en JavaScript
En tu repositorio de GitHub contact-list, crea un branch llamado review-2-algorithms
Completa tu producto de lista de contactos, incluyendo el algoritmo de ordenamiento para una revisión en vivo al grupo
Bonus: Agrega un campo a los contactos llamado order, usa tu algoritmo para ordenar los contactos con base en el atributo order
Adjunta el link de tu solución en el campo a continuación 📦*/

var mycontact= [{
    "order": 1,
     "id": 29445598-6,
    "name": "Clara",
    "lastname": "Fuenzalida",
    "phone": 967678635,
    "address": "address1"
},{
    "order": 2,
    "id": 218337696-7,
    "name": "Alejandra",
    "lastname": "Aranda",
    "phone": 967988678,
    "address": "address2"
},{
    "order": 3,
    "id": 17888659-0,
    "name": "Angel",
    "lastname": "Ramirez",
    "phone": 984092348,
    "address": "address3"
},{
    "order": 4,
    "id": 16998407-1,
    "name": "Andrea",
    "lastname": "Conejeros",
    "phone": 945838765,
    "address": "address4"
},{
    "order": 5,
    "id": 17223985-2,
    "name": "josé" ,
    "lastname": "Orellana",
    "phone": 912394951,
    "address": "address5"
},{
    "order": 6,
    "id": 18221342-0,
    "name":  "Claudio",
    "lastname": "Jorquera",
    "phone": 997124345,
    "address": "address6"
},{
    "order": 7,
    "id": 18556956-4,
    "name":  "Darío",
    "lastname": "Becerra",
    "phone": 998123675,
    "address": "address7"
},{
    "order": 8,
    "id": 7775443-7,
    "name":  "Iara",
    "lastname": "Portilla",
    "phone": 971351988,
    "address": "address8"
}
];
///LA LISTA DE CONTACTOS SE COMPLETO CON EL ID y EL TELEFONO CON NUMEROS INVENTADOS, ADEMAS SE LE AGREGO EL ORDEN
/// algoritmos de ordenamiento

/// ordenamiento por id de menor a mayor

 mycontact.sort( (a, b) => {
    if(a.id < b.id) {
      return -1;
    }
    if(a.id > b.id) {
      return 1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  console.log(mycontact);

  // ordenamiento del telefono de mayor a mayor

  /* mycontact.sort( (a, b) => {
    if(a.phone > b.phone) {
      return -1;
    }
    if(a.phone < b.phone) {
      return 1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  console.log(mycontact); */


// ordenamiento del nombre  de A a la Z

/* mycontact.sort( (a, b) => {
    if(a.lastname < b.lastname) {
      return -1;
    }
    if(a.lastname > b.lastname) {
      return 1;
    }
    if (a.lastname.toLowerCase() < b.lastname.toLowerCase()) {
      return -1;
    }
    if (a.lastname.toLowerCase() > b.lastname.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  console.log(mycontact); */

  // ordenamiento segun orden de mayor a menor

/* mycontact.sort( (a, b) => {
    if(a.order > b.order) {
      return -1;
    }
    if(a.order < b.order) {
      return 1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  console.log(mycontact); */
  
  ///__________________________________________________________________________________
  /*PARA AGREGAR UN NUEVO CONTACTO AL FINAL


mycontact.push({name: 'Josefina Smith', phone: 'Phone9', address: 'address9'});



    PARA REMOVER UN CONTACTO 

var mycontact = mycontact.filter(function(contact) {
    return contact.phone !== 'Phone5'; 
});
 
console.log(mycontact);

  LA FUNCION PARA ACTUALIZAR UN CONTACTO
  
  var newcontact = "Carla Torres";
  var address= "address5";
  
  mycontact.map(function(dato){
    if(dato.address == address){
      dato.name = newcontact;
    }
    
    return dato;
  });
*/


