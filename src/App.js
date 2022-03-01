// src/App.js
import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";


let contacts=contactsData.slice(0,5);

function App() {
  const [famous,setFamous]=useState(contacts)

  function addFamous() {
    let random = contactsData[Math.floor(Math.random() * contactsData.length)];
    if(famous.length === contactsData.length) return "You can't add more contacts!"
    if(famous.some((contact) => (contact.id === random.id))) {addFamous()}
    else {setFamous(famous => [...famous, random])}
  }

  function orderByName() {
    let sortedByName = famous.slice().sort((a,b)=> {
      return (a.name > b.name ? 1 : (a.name === b.name ? 0 : -1))
    })
    setFamous(sortedByName)
  }
  function sortPopularity(){
    let sortedByName = famous.slice().sort((a,b)=> {
      return (a.popularity > b.popularity ? -1 : (a.popularity === b.popularity ? 0 : 1))
    })
    setFamous(sortedByName)
  }
  function deleteActor(id){
    id=
    setFamous(contacts.filter(actor=>actor.id!==id))
    }
  
  return (
    <div className="App">
     <button onClick={()=>addFamous()}>Add a famoso</button>
     <button onClick={()=>orderByName()}>sort famoso</button>
    <button onClick={()=>sortPopularity()}>ordena popularity</button>
    <table>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Oscars</th>
        <th>Emmy</th>
      </tr>
    </thead>
   
      <tbody>
      {famous.map((contact)=>(
        <tr className="tr" key={contact.id}>
          <td><img src={contact.pictureUrl} alt='asda'></img> </td>
          <td> {contact.name}</td>
          <td> {(contact.popularity).toFixed(2)}</td>
          <td> {contact.wonOscar ? '🏆':'x'}</td>
          <td> {contact.wonEmmy ? '🏆':'x'}</td>
          <td><button onClick={()=>deleteActor(contact.id)}>DELETE</button></td>
           
      </tr>
      
      )

      )}
      
      </tbody>
      
    </table>
    
    
    </div>
    
    )
}
export default App;