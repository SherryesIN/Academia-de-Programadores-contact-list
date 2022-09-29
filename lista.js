/*Lista de contactos - 1
Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido 
como una sola cadena de caracteres
Crea una función para añadir un nuevo contacto a una lista
Crea una función para borrar un contacto existente de la lista
Crea una función para imprimir en consola los contactos presentes en la lista
Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1
 y compártelo con nosotros. 👍🏼⬇️*/
 /*mi Array*/
var contactos = ["Clara Fuenzalida" , "Alejandra Aranda" , "Angel Ramirez" , "Andrea Conejeros" , "josé Orellana " ,
        "Claudio Jorquera" , "Darío Becerra" , "Iara Portilla" , "Cesar Oyarzun" , "Marina Parada" , "Monserrat varela" ,
        "Richard Carrasco " ];
 /*mi string*/
contactos.toString ();
contactos.join ("-"); /* or contactos.join (""):*/
contactos ='Clara Fuenzalida-Alejandra Aranda-Angel Ramirez-Andrea Conejeros-josé Orellana -Claudio Jorquera-Darío Becerra-Iara Portilla-Cesar Oyarzun-Marina Parada-Monserrat varela-Richard Carrasco '

/*agregar contactos*/
/*opcion A*/
this.addContact = function(){
    contactos.push("nombre a agregar");}

/*opcion B por consultar */
this.NewContact = function(){
    let nombre = prompt("Nombre de Contacto");
    nombre = parseInt(nombre);
     contactos.push("nombre");}
/*opcion c*/
     const contac ={
        contactoNuevo:''
      }
          function myFunc() {
          person.new = prompt('Cual es tu nombre?') 
         }
           myFunc();
           console.log( `contactonuevo: ${ person.new}`)
           contactos.push("contactonuevo");
      
        /*eliminar contactos*/  
          /*opcion A*/
 this.deleteContact = function(){
             contactos.pop("ultimo nombre a eliminar");}


        /*opcion B*/
 this.deleteContact = function(){
           contactos.splice(2,1);}

           /*imprimir contactos en la consola*/
        /*opcion A*/
this.ImprContact = function(){
            console.log(contactos);}

        /*opcion B*/
this.TableContact = function(){
            console.table(contactos);}

