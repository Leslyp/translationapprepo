import React from 'react';

function CardContainer(props){
	return(
   	<div className="showCard">
   		<section class="inputCard">
	      <label for="inputTranslation"> Card:
	      	<p>{props.word}</p>
	      </label>
	    </section>
	    <section className="inputTranslation">
	      <label htmlFor="inputTranslation">(language placeholder) Translation:
	      	<input type="text" id="inputTranslation" name="inputTranslation" />
	      </label>
	      <button className="submitbtn" >Submit</button>
	    </section>
	  </div>
	);
}

export default CardContainer;
