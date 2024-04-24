export function decodedValue(input: string[]): number {
    const colors = [
      "black",
      "brown",
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "violet",
      "grey",
      "white",
    ];
  
    let decodedNumber = 0;
  
    for (let i = 0; i < 2 && i < input.length; i++) {
      const colorIndex = colors.indexOf(input[i]);
  
      if (colorIndex !== -1) {
        decodedNumber = decodedNumber * 10 + colorIndex;
      }
    }
  
    return decodedNumber;
  }
  