import React ,{useState} from "react";

function App() {

const [first, setFirst]= useState("");
const [last, setLast]= useState("");

function handlefirst (event)
{
  setFirst(event.target.value);
}
function handlelast (event)
{
  setLast(event.target.value);
}

  return (
    <div className="container">
      <h1>{first+" "+last}</h1>
      <form>
        <input onChange={handlefirst} name="fName" placeholder="First Name" />
        <input onChange={handlelast} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
