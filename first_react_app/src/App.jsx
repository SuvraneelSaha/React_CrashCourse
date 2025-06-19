import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Card({ title, date }) {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  // [varName , function]
  // norm -[varName , setVarName]
  // const [state , setState ] = useState(false);
  // state - variable
  // setState - function that changes state
  // useState(default value)
  // use --> hooks starting word use means hook
  // useState -- it is also a hook
  //hooks are special functions -- that are used for state management , handling side effects like data fetching

  // useState - for managing state
  // useEffect - for handling side effects like data fetching
  // useContext - for sharing data across components
  // useCallback - for optimizing callback functions

  useEffect(() => {
    console.log(`${title} has been liked : ${hasLiked}`);
  }, [hasLiked]);

  useEffect(() => {
    // runs only once - when mounting of the component
    console.log("Card Rendered");
  }, []);
  // empty dependency array
  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>
        {" "}
        Movie Name : {title} : {date} <br /> {count || null}
      </h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "💟"}
        {/* {} --> this is dynamic block of code 
      dynamic variable and render the data of the variable  */}
        {/* until and unless the page is reloaded , 
      the components' state will be restored 
      so 
      the state is not persistent across browser reload  */}
      </button>
    </div>
  );
}

const App = () => {
  // according to the state of usecase of the components ;
  // we need to include state in that specific components or in functions
  return (
    <div className="card-container">
      <Card title="Star Wars" date="2012" />
      <Card title="The Amateur" date="2025" />
      <Card title="Blue Lock" date={2022} />
    </div>
  );
};

export default App;
