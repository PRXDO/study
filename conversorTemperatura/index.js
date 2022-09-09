var celsius = document.getElementById("inputCelsius");
var fahrenheit = document.getElementById("inputFahrenheit")
var kelvin = document.getElementById("inputKelvin")

function clearInput() {

    celsius.value = "";
    fahrenheit.value = "";
    kelvin.value = "";

}

function convertertTemperatures() {

    console.log(typeof(celsius));
    var numCelsius = parseFloat(celsius);
    
    console.log(typeof(numCelsius));
    


    if( (celsius != "" ) && (fahrenheit.value == null) && (kelvin.value == null)  ){

        var fahrenheitTemp;
        var kelvinTemp;

        fahrenheitTemp = 1.8*celsius.value + 32;
        kelvinTemp = celsius + 273;

        fahrenheit.value = fahrenheitTemp;
        kelvin.value = kelvinTemp;

        console.log(kelvinTemp)
        console.log("1")
    }else{
        console.log("2")

    }

}

