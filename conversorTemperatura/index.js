var celsius = document.getElementById("inputCelsius");
var fahrenheit = document.getElementById("inputFahrenheit")
var kelvin = document.getElementById("inputKelvin")

function clearInput() {

    celsius.value = "";
    fahrenheit.value = "";
    kelvin.value = "";

}

function convertertTemperatures() {

    var fahrenheitTemp;
    var kelvinTemp;
    var celsiusTemp;

        // Celsius -> Fahrenheit/Kelvin
    if ((celsius != "") && (fahrenheit.value == "") && (kelvin.value == "")) {

        fahrenheitTemp = (1.8 * celsius.value) + 32;
        kelvinTemp = (+celsius.value + +273.15);

        fahrenheit.value = fahrenheitTemp.toFixed(2);
        kelvin.value = kelvinTemp.toFixed(2);

        console.log(fahrenheitTemp)
        console.log(kelvinTemp)

        // Fahrenheit -> Celsius/Kelvin
    } else if ((fahrenheit != "") && (celsius.value == "") && (kelvin.value == "")) {

        celsiusTemp = (fahrenheit.value - 32) / 1.8;
        kelvinTemp = ((fahrenheit.value - 32) * 5 / 9) + 273.15;

        celsius.value = celsiusTemp.toFixed(2);
        kelvin.value = kelvinTemp.toFixed(2);


        // Kelvin -> Celsius/Fahrenheit
    } else if ((kelvin != "") && (celsius.value == "") && (fahrenheit.value == "")) {

        celsiusTemp = kelvin.value - 273.15;
        fahrenheitTemp = ((kelvin.value - 273.15) * 1.8) + 32;

        celsius.value = celsiusTemp.toFixed(2);
        fahrenheit.value = fahrenheitTemp.toFixed(2);


    }
}
