import React, { Component } from 'react';
import InitState from './InitState';
import './App.css';

// Create a vocabulary study app that allows users to select a language and then get a series of flashcards of words.
 // The user must be able to write the translation of the word and the app will tell them if they are right or wrong.
 // If they are wrong, the correct translation must be shown.
 // Allow the user to loop through the deck as many times as necessary until they get them all correct.
 // Allow the user to reset at any time.

// Step 1:
// Ask user which language they would like to show on the cards and then ask what language they will be translating to.

// Step 2:
// Show user the first word and provide an input to have them type the translation & submit.

// Step 3:
// Evaluate the answer. Make sure that you account for extra white spaces at the beginning or end of the submitted word and also make your evaluation case insensitive. In other words, "TEST", " Test " and "test" would all be evaluated the same.

// Step 4: 
// If the user gets the answer correct,
// take the word out of the deck for this round
// and show the user how many words correct out of how many words in the deck.

// Step 5:
// When the user has gotten all words correct, congratulate them and ask if they want to reset.

// Step 6:
// The user should be able to reset to Step 1 at any time.

class App extends Component {
  // allows us to access the react component and build on it
  constructor(){
    // call super() if you have a constructor to access THIS, if not it's uninitialized and you can't access it
    super();
    this.updateCardLanguage = this.updateCardLanguage.bind(this);
    this.updateTranslationLanguage = this.updateTranslationLanguage.bind(this);
    this.updateTranslationInput = this.updateTranslationInput.bind(this);
    this.handleTranslation = this.handleTranslation.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = InitState;
  }

  // set selected fromlanguage to value in state
  updateCardLanguage(event){

    let cardLanguage = event.target.value;
    this.setState({
      fromLanguage: cardLanguage,
    });
  }

  // set selected tolanguage to value in state
  updateTranslationLanguage(event){
    // event target value grabs the value from select dropdown 
    let cardLanguage = event.target.value;

    this.setState({
      toLanguage: cardLanguage,
    });
  }

  // set input answer to value in state
  updateTranslationInput(event){
    // event target value grabs the value from select dropdown 
    let input = event.target.value;

    this.setState({
      translation: input,
    });
  }

  // function to check if translation is correct
  handleTranslation(){
    var stateCopy = Object.assign({}, this.state);
    var answer = stateCopy.translation.toLowerCase();

    // trim the input answer for whitespaces
    // use tolowercase to make all words 
    // if user guesses correctly
    if(answer.trim() === stateCopy.words[stateCopy.currentWordIndex][stateCopy.toLanguage].toLowerCase()){
      alert("You got it right");
      stateCopy.numberCorrect++;
      if(stateCopy.numberCorrect == this.state.words.length){
        alert("Congratulations! You got all of the words correct");
        this.setState(InitState);
        return;
      }
      // increase index to show the following word
      stateCopy.currentWordIndex++;
    } else{ // if user guesses incorrectly
      alert("You got it wrong");
    }

    // update input box to empty string to clear input area
    stateCopy.translation = "";
    this.setState(
      stateCopy
    );
  }

  // function to reset the app, by setting state back to the initial state
  handleReset(){
    this.setState(InitState)
  }

  render(){
    return(
      <div className="App">

        <div className="header">
          <h1>Translator App</h1>
        </div>
        <div className="userInput">
          <section className="cards" >
            <label htmlFor="cardLanguage">Language for cards:</label>
            <select id="cardLanguage" name="cardLanguage" value={this.state.fromLanguage} onChange={this.updateCardLanguage} >
              <option name="cardLanguage" >Select language</option>
              <option name="cardLanguage" value="en">English</option>
              <option name="cardLanguage" value="de">German</option>
              <option name="cardLanguage" value="fr">French</option>
              <option name="cardLanguage" value="sp">Spanish</option>
            </select>
          </section>
         

          <section className="cards" >
            <label htmlFor="translationLanguage">Language for cards:</label>
            <select id="translationLanguage" name="translationLanguage" value={this.state.toLanguage} onChange={this.updateTranslationLanguage}>
              <option name="cardLanguage" >Select language</option>
              <option name="translationLanguage" value="en">English</option>
              <option name="translationLanguage" value="de">German</option>
              <option name="translationLanguage" value="fr">French</option>
              <option name="translationLanguage" value="sp">Spanish</option>
            </select>
          </section>
         
          <div className="showCard">
            <section className="inputCard">
              <h2>{this.state.languages[this.state.fromLanguage]} Card:</h2>
              <p>{this.state.words[this.state.currentWordIndex][this.state.fromLanguage]}</p>
            </section>
            <section className="inputTranslation">
              <label htmlFor="inputTranslation">{this.state.languages[this.state.toLanguage]} Translation:
                <input type="text" id="inputTranslation" value={this.state.translation} onChange={this.updateTranslationInput} name="inputTranslation" />
              </label>
              <button onClick={this.handleTranslation}>Submit</button>
            </section>
            <section>
              <p>You have {this.state.numberCorrect} word(s) out of {this.state.words.length} correct</p>
            </section>
          </div>
        </div>
        <button id="resetBtn" onClick={this.handleReset}>Reset</button>

      </div>
    );
  }
}

export default App;
