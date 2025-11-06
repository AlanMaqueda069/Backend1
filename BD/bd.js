import mongoose from "mongoose"

async function concectarBD(){
	try{
		const respuestaMongo=await mongoose.connect("mongodb+srv://humbertosmti23_db_user:Leones069@cluster0.onvfssb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;")
         
			console.log("conexion con mongodb atlas")
	}
	catch(err){
		console.log("Error"+err)
	}
}
concectarBD()