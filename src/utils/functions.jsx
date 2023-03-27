export const getTypeClass = (types) => {
    if (types) {
      switch (types[0]) {
        case "normal":
          return "normal";
        case "fighting":
          return "fighting";
        case "flying":
          return "flying";
        case "poison":
          return "poison";
        case "ground":
          return "ground";
        case "rock":
          return "rock";
        case "bug":
          return "bug";
        case "ghost":
          return "ghost";
        case "steel":
          return "steel";
        case "fire":
          return "fire";
        case "water":
          return "water";
        case "grass":
          return "grass";
        case "electric":
          return "electric";
        case "psychic":
          return "psychic";
        case "ice":
          return "ice";
        case "dragon":
          return "dragon";
        case "dark":
          return "dark";
        case "fairy":
          return "fairy";
        default:
          return "";
      }
    }
    return "";
  };
