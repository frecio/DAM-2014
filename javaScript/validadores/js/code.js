
    window.$= Element.prototype.$ =function(selector){
        var that = (this instanceof Element) ? this : document;
        var elems = that.querySelectorAll(selector);
        return(elems.length === 1) ? elems[0] : elems;
    };

window.onLoad= (function(){
    var datos = $("input");
    var areas = document.getElementsByTagName("textarea");

    var validadores =[];


    var validar = function(evt){


        if (this.dataset.validator == "required"){
            validadores[this.name] = validador.required(this.value);
            console.log(this.name + ": " +validador.required(this.value));
        }
        else if (this.dataset.validator == "email"){
            validadores[this.name] = validador.email(this.value);
            console.log(this.name + ": " +validador.email(this.value));

        }
        else if (this.dataset.validator == "password"){
            validadores[this.name] = validador.password(this.value);
            console.log(this.name + ": " +validador.password(this.value));
        }
        else if (this.dataset.validator == "min"){
            validadores[this.name] = validador.min(this.value);
            console.log(this.name + ": " +validador.min(this.value));
        }

    };


    var enviarForm= function(evt){
        evt.preventDefault();
        var correcto = true;

        for (var indice in validadores){
            correcto = correcto && validadores[indice];
        }

        console.log("Formulario correcto: " + correcto);

    };


    for (var i = 0; i<= datos.length-1; i++){

        if (datos[i].type == "submit"){
            datos[i].addEventListener("click",  enviarForm);
        }
        else{
            datos[i].addEventListener("blur",  validar);
            validadores[datos[i].name]=[false];
        }
    }

    for ( var j = areas.length-1; j>=0; j--){
        areas[j].addEventListener("blur",  validar);
        validadores[areas[j].name] = false;

    }

    console.log(validadores);
})();