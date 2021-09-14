import React from "react";
import ReactDOM from "react-dom";
import Joke from "./Joke";
//import jokes json file
let jokes = require("./jokes.json");
console.log(jokes);
let index = 0;

function App() {

  //JAVASCRIPT HIGHER ORDER METHODS - map, filter, reduce
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const doubled = nums.map(function(num) {
    return num * 2;
  });
  console.log(doubled);

  //render every joke in the json file through maps
  const jokeComponents = jokes.map(joke => {
    return (
      <Joke key={joke.id} question={joke.setup} answer={joke.punchline} />
    )
  })

  return (

    <div className="App">
      {jokeComponents}
    </div>
  );
}

export default App;
