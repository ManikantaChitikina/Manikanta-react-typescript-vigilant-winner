import React from 'react';
import './App.css';
import Greet from './Components/Greet';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';
import { Status } from './Components/Status';
import { Heading } from './Components/Heading';
import { Oscar } from './Components/Oscar';
import { Button } from './Components/Button';
import { Input } from './Components/Input';
import { Container } from './Components/Container';
function App() {
  const personName={
  first:'Manikanta',
  last:'chitikina'
  }
  const nameList=[
      {
      first:'Manikanta',
      last:'chitikina'
      },
      {
        first:'Ravi',
        last:'kumar'
      },
      {
        first:'Vamsi',
        last:'krishna'
      }
  ]
   
  return (
    <div className="App">
      {/* <Greet name='Manikanta' messageCount={10} isLoggedIn={false}></Greet> */}
      {/* <Person name={personName}></Person> */}
      {/* <PersonList names={nameList}></PersonList> */}
      {/* <Status status='Success'></Status>
      <Heading>Place Holder text</Heading>
      <Oscar>
        <Heading>Oscar goes to RRR </Heading>
      </Oscar>
      <Greet name='Manikanta' isLoggedIn={true}></Greet> */}
    {/* <Button handleClick={(event,id)=>{console.log('Button clicked',event ,id)}}></Button> */}
    {/* <Input value='' handleChange={(event)=>console.log(event)}></Input> */}
      <Container styles={{border:'1px solid black', padding:'1rem',backgroundColor:'blue',color:'white' }}></Container>
    </div>
  );
}

export default App;
