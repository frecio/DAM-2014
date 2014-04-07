
this.addEventListener('message', function(e) {

    data = JSON.parse(e.data);
    console.log(data);
/*
    for(var i=0 ;i<=(Math.max(number1,number2));i++){
            primo=1;

            if(i==0 || i==1) // Comprueba si es 0 o 1 para evitar errores al generalizar con los otros números
            {
                arrayPrimos[totalPrimos]=i;
                totalPrimos++;
            }else{


            for(var j=2;j<i;j++){ // Se comprueba que el residuo sea diferente de 0 para decidir si es o no primo
                if(i%j==0 ){
                    primo=0;
                    break;
                }
            }
                if(primo==1)
                {
                    arrayPrimos[totalPrimos]=i;
                    totalPrimos++;
                }
            }

    }*/
});