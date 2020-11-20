function registrarse(){
    var vregiusuario = document.getElementById("inusuario");
    var vregicontraseña = document.getElementById("incontraseña");
    var vregicontraseña2 = document.getElementById("incontraseña2");

        if (vregicontraseña.value == vregicontraseña2.value) {
            localStorage.setItem("Usuario", vregiusuario.value);
            localStorage.setItem("Contraseña", vregicontraseña.value);
            alert("Usuario creado correctamente");
        } else {
            alert("Contraseñas no coinciden");
        }

}
function iniciarsesion(){
    var vusuario = document.getElementById("usuario");
    var vcontraseña = document.getElementById("contraseña");
    var lsusuario = localStorage.getItem("Usuario");
    var lscontraseña = localStorage.getItem("Contraseña");

    if (vusuario==lsusuario && vcontraseña==lscontraseña){
        alert("Sesion iniciada");
    } else{
        alert("Usuario y/o contraseña incorrectos")
    }
}

setInterval (cambiarimagen,6000);
var foto=0

function cambiarimagen(){
    if (foto==0){
        document.getElementById("1").hidden=true;
        document.getElementById("2").hidden=false;
        foto++;
    } else if (foto==1){
        document.getElementById("2").hidden=true;
        document.getElementById("3").hidden=false;
        foto++;
    } else if (foto==2){
        document.getElementById("3").hidden=true;
        document.getElementById("4").hidden=false;
        foto++;
    } else if (foto==3){
        document.getElementById("4").hidden=true;
        document.getElementById("1").hidden=false;
        foto=0;
    }
}