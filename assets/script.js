const celsiusInput = document.getElementById("celsius");
const kelvinInput = document.getElementById("kelvin");
const fahrenheitInput = document.getElementById("fahrenheit");

celsiusInput.addEventListener("input", () =>
  processData(celsiusInput.value, "celsius"),
);
kelvinInput.addEventListener("input", () =>
  processData(kelvinInput.value, "kelvin"),
);
fahrenheitInput.addEventListener("input", () =>
  processData(fahrenheitInput.value, "fahrenheit"),
);

function processData(value, type) {
  if (!value) {
    if (type === "celsius") {
      kelvinInput.value = "";
      fahrenheitInput.value = "";
    } else if (type === "kelvin") {
      celsiusInput.value = "";
      fahrenheitInput.value = "";
    } else if (type === "fahrenheit") {
      celsiusInput.value = "";
      kelvinInput.value = "";
    }
    return; // exit early
  }

  switch (type) {
    case "celsius": {
      let fahrenheit = toFahrenheit(Number(value), type);
      let kelvin = toKelvin(Number(value), type);

      fahrenheitInput.value = fahrenheit;
      kelvinInput.value = kelvin;

      break;
    }
    case "kelvin": {
      let fahrenheit = toFahrenheit(Number(value), type);
      let celsius = toCelsius(Number(value), type);

      fahrenheitInput.value = fahrenheit;
      celsiusInput.value = celsius;

      break;
    }
    case "fahrenheit": {
      let kelvin = toKelvin(Number(value), type);
      let celsius = toCelsius(Number(value), type);

      kelvinInput.value = kelvin;
      celsiusInput.value = celsius;

      break;
    }
  }
}

function toFahrenheit(value, type) {
  //type can be kelvin or celsius
  let fah;
  if (type === "kelvin") {
    fah = (Number(value) - 253.15) * (9 / 5) + 32;
  } else if (type === "celsius") {
    fah = Number(value) * (9 / 5) + 32;
  } else {
    alert("Invalid type");
    return;
  }

  return fah;
}

function toCelsius(value, type) {
  // type can be kelvin or fahrenheit
  let cels;
  if (type === "kelvin") {
    cels = Number(value) - 273.15;
  } else if (type === "fahrenheit") {
    cels = (Number(value) - 32) * (5 / 9);
  } else {
    alert("Invalid type");
    return;
  }

  return cels;
}

function toKelvin(value, type) {
  // type can be fahrenheit or celsius
  let kelvin;

  if (type === "celsius") {
    kelvin = Number(value) + 273.15;
  } else if (type === "fahrenheit") {
    kelvin = (Number(value) - 32) * (5 / 9) + 273.15;
  } else {
    alert("Invalid type");
    return;
  }

  return kelvin;
}
