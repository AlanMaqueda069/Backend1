impprt Contacto from"../models/Contacto,js"

ecport asinc function nuevoContacto({nombre, edad}){
	const Contacto=new Contacto({nombre, edad})
	const respuestaMongo=await Contacto.save()
	return respuestaMongo
}