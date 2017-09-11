import React, { Component } from 'react';
import InitState from './InitState';
import CardContainer from './CardContainer';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.handleCardLanguageClick = this.handleCardLanguageClick.bind(this);
    this.updateCurrentCardInput = this.updateCurrentCardInput.bind(this);
    this.updateCurrentTranInput = this.updateCurrentTranInput.bind(this);
    this.handleTranLanguageClick = this.handleTranLanguageClick.bind(this);
    this.state = InitState;
  }

  updateCurrentCardInput(event){
    const cardInput = event.target.value;
    this.setState({
      currentCardInput: cardInput,
    });
  }
  handleCardLanguageClick(event){
    // COPY OF STATE - STATECOPY
    let stateCopy = Object.assign({}, this.state);
    stateCopy.cardInput.push({
      "choice": this.state.currentCardInput,
    });
    // reset current comment 
    stateCopy.currentCardInput = "";

    if(this.state.currentCardInput.toLowerCase() === "english"){
      console.log("english");

    } else if(this.state.currentCardInput.toLowerCase() === "german"){
     console.log("german");
    } else if(this.state.currentCardInput.toLowerCase() === "french"){
     console.log("french");
    } else if(this.state.currentCardInput.toLowerCase() === "spanish"){
     console.log("spanish");
    }
    // UPDATE STATE WITH STATECOPY
    this.setState(stateCopy);
  }

  updateCurrentTranInput(event){
    const tranInput = event.target.value;
    this.setState({
      currentTranInput: tranInput,
    });
  }

  handleTranLanguageClick(event){
    // COPY OF STATE - STATECOPY
    let stateCopy = Object.assign({}, this.state);
    stateCopy.translationInput.push({
      "choice": this.state.currentTranInput,
    });
    // reset current comment 
    stateCopy.currentTranInput = "";

    if(this.state.currentTranInput.toLowerCase() === "english"){
      console.log("english");
    } else if(this.state.currentTranInput.toLowerCase() === "german"){
     console.log("german");
    } else if(this.state.currentTranInput.toLowerCase() === "french"){
     console.log("french");
    } else if(this.state.currentTranInput.toLowerCase() === "spanish"){
     console.log("spanish");
    }
    // UPDATE STATE WITH STATECOPY
    this.setState(stateCopy);
  }

  render(){
    const cards = this.state.english.map(function(word, index){
       return(
        <div key={`word-wrapper-${index}`} className="words">
          <CardContainer 
            key={`word-${index}`}
            word={word}
            tranlslation={this.state.translationInput}
          />
        </div>
      );
    },this);

    return(
      <div className="App">
        <div className="header">
          <h1>Translator App</h1>
        </div>
        <div className="userInput">
          <section className="cards">
            <label htmlFor="cards">Language for cards:
            <input type="text" id="cards" name="cards" value={this.state.currentCardInput} onChange={this.updateCurrentCardInput} /></label>
            <button className="submitbtn" onClick={this.handleCardLanguageClick}>Submit</button>
          </section>
          <section className="translation">
            <label htmlFor="translation">Language for translation:
            <input type="text" id="translation" name="translation" value={this.state.currentTranInput} onChange={this.updateCurrentTranInput} /></label>
            <button className="submitbtn" onClick={this.handleTranLanguageClick}>Submit</button>
          </section>
        </div>
        {cards}
      </div>
    );
  }
}

export default App;
