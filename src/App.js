import React, {Component} from 'react';
import Header from "./components/header/header";
import Jumbotron from "./components/jumbotron/jumbotron";
import Characters from "./images.json";
import Thumbnail from "./components/thumbnails/thumbnails";
import Footer from "./components/footer/footer";
import shuffle from "shuffle-array";
shuffle(Characters);

class app extends Component
{
  state = 
  {
    Characters,
    score: 0,
    statement: "Click an Image to Begin!",
    topScore: 0
  };
  
// function to exicute when image is clicked on
  clickedImage = id =>
  {
    var newChars = [];

    var imageIndex = this.state.Characters.findIndex(Element => {return Element.id === id});

    if(this.state.Characters[imageIndex].clicked === false)
    {
      newChars = this.state.Characters;
      newChars[imageIndex].clicked = true;
      this.setState({ Characters :  newChars, score: this.state.score + 1, statement: "You are correct!"});

      if(this.state.score >= this.state.topScore)
      {
        this.setState({topScore: this.state.topScore + 1});
      }

      shuffle(Characters);
    }
    else
    {
      newChars = this.state.Characters;
      newChars.map(character => character.clicked = false);
      this.setState({ Characters :  newChars, score: 0, statement: "Incorrect, Click an Image to try again!" });
      shuffle(Characters);
    }
  };
  
// building the layout of the webpage with the components that were made.
  render()
  {
    return(
      <div>
        {/* passing in values to properly build this with the right data */}
      <Header
        score = {this.state.score}
        statment = {this.state.statement}
        topScore = {this.state.topScore}
      />
      <Jumbotron/>
      <div className = "container">
      {this.state.Characters.map(character =>(
        <Thumbnail
        name = {character.name}
        image = {character.image}
        id = {character.id}
        key = {character.id}
        clickedImage={this.clickedImage}
        />
      ))} 
      </div>
      <Footer/>
    </div>  
    );
  }
}

export default app;