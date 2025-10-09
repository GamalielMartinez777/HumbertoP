let btnL = document.getElementById("login");

btnL.addEventListener("click", function() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(user === "Juan" && pass === "123"){
        document.getElementById("resultado").innerHTML = "Entraste rei";
    }else if(user !== "Juan" && pass === "123"){
        if(user.trim() === ""){
            document.getElementById("resultado").innerHTML = "No ingresaste usuario";
        }else{
            document.getElementById("resultado").innerHTML = "Usuario incorrecto";
        }
    }else if(user === "Juan" && pass !== "123"){
        if(pass.trim() === ""){
            document.getElementById("resultado").innerHTML = "No ingresaste contrasenia";
        }else{
            document.getElementById("resultado").innerHTML = "Contrasenia incorrecta";
        }
    }else if(user.trim() === "" && pass.trim() === ""){
        document.getElementById("resultado").innerHTML = "No ingresaste nada";
    }else{
        document.getElementById("resultado").innerHTML = "Todo mal rei";
    }
})