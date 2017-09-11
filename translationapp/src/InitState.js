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
	english: [ 
		"cat",
		"dog",
		"man",
		"woman",
		"boy",
		"girl",
		"house",
		"car",
		"plane",
		"butterfly",
	],
	german: [
		"Katz",
		"Hund",
		"Mann",
		"Frau",
		"Junge",
		"Madchen",
		"Haus",
		"Auto",
		"Fleugzug",
		"Schmetterling",
	],
	spanish: [ 
		"chat",
		"chien",
		"homme",
		"femme",
		"garcon",
		"fille",
		"maison",
		"voiture",
		"avion",
		"papillon",
	],
	french: [
		"gato",
		"perro",
		"hombre",
		"mujer",
		"chico",
		"niña",
		"casa",
		"coche",
		"avión",
		"mariposa",
	],

}

export default initState;
