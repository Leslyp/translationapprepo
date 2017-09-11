import React from 'react';


const initState = {
  // words: [
  //   { "en": "cat", "de": "Katz", "fr": "chat", "sp": "gato" },
  //   { "en": "dog", "de": "Hund", "fr": "chien", "sp": "perro" },
  //   { "en": "man", "de": "Mann", "fr": "homme", "sp": "hombre" },
  //   { "en": "woman", "de": "Frau", "fr": "femme", "sp": "mujer" },
  //   { "en": "boy", "de": "Junge", "fr": "garcon", "sp": "chico" },
  //   { "en": "girl", "de": "Madchen", "fr": "fille", "sp": "niña" },
  //   { "en": "house", "de": "Haus", "fr": "maison", "sp": "casa" },
  //   { "en": "car", "de": "Auto", "fr": "voiture", "sp": "coche" },
  //   { "en": "plane", "de": "Fleugzug", "fr": "avion", "sp": "avión" },
  //   { "en": "butterfly", "de": "Schmetterling", "fr": "papillon", "sp": "mariposa" },
  // ]

  currentCardInput: "",
  currentTranInput: "",
  cardInput: [],
  translationInput: [],
  // cardLanguage: "",
  // translationLanguage: "",
  words: [
  	"english": { 
  		"en": "cat",
  		"en": "dog",
  		"en": "man",
  		"en": "woman",
  		"en": "boy",
  		"en": "girl",
  		"en": "house",
  		"en": "car",
  		"en": "plane",
  		"en": "butterfly",
  	},
  	"german": {
  		"de": "Katz",
  		"de": "Hund",
  		"de": "Mann",
  		"de": "Frau",
  		"de": "Junge",
  		"de": "Madchen",
  		"de": "Haus",
  		"de": "Auto",
  		"de": "Fleugzug",
  		"de": "Schmetterling",
  	},
  	"spanish": { 
  		"fr": "chat",
  		"fr": "chien",
  		"fr": "homme",
  		"fr": "femme",
  		"fr": "garcon",
  		"fr": "fille",
  		"fr": "maison",
  		"fr": "voiture",
  		"fr": "avion",
  		"fr": "papillon",
  	},
  	"french": {
  		"sp": "gato",
  		"sp": "perro",
  		"sp": "hombre",
  		"sp": "mujer",
  		"sp": "chico",
  		"sp": "niña",
  		"sp": "casa",
  		"sp": "coche",
  		"sp": "avión",
  		"sp": "mariposa",
  	}
  ]
}

export default initState;
