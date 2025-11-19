import React ,{useState} from "react";

function App() {

const [fullName, setFullName]= useState({fName:"",lName:""});


function handleChange (event)
{
  const {name,value}=event.target;


  setFullName((previous)=>{
if(name==="fName")
{
  return {fName:value,lName:previous.lName};

}

else if(name==="lName")
{
  return(
    {fName:previous.fName,lName:value}
  )
}



  }
);


}


  return (
    <div className="container">
      <h1>{fullName.fName+" "+fullName.lName}</h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={fullName.fName}/>
        <input onChange={handleChange} name="lName" placeholder="Last Name" value={fullName.lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
