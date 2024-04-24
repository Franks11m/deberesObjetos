export function decodedResistorValue(colors: string[]) {
    const colorValues = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    
    // Verificar si los colores dados son válidos
    if (colors.length !== 3 || colors.some(color => !colorValues.includes(color))) {
      return "Colores de resistencia inválidos";
    }
  
    const mainValue = colorValues.indexOf(colors[0]) * 10 + colorValues.indexOf(colors[1]);
    const zeros = colorValues.indexOf(colors[2]);
  
    // Calcular el valor final
    let finalValue = mainValue;
    let unit = "ohmios";
  
    if (zeros >= 3 && zeros < 6) {
      finalValue *= Math.pow(10, zeros - 2);
      unit = "kiloohmios";
    } else if (zeros >= 6 && zeros < 9) {
      finalValue *= Math.pow(10, zeros - 5);
      unit = "megaohmios";
    } else if (zeros >= 9) {
      finalValue *= Math.pow(10, zeros - 8);
      unit = "gigaohmios";
    }
  
    return `${finalValue} ${unit}`;
  }
  