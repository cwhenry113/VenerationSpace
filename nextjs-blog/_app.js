import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import React from 'react'
import {
  Container,
  Header,
  Image,
  Button,
} from 'semantic-ui-react'
import { NavBar } from './components/NavBar';


const App = () => (
  <div>
    <NavBar />
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Apply for a free online memorial for your loved one</Header>
      <p>This is a basic fixed menu template using fixed size containers. we can add some sutext here to add detail.</p>
      
      <div>
    <Button size='massive'>Apply</Button>
    <Button size='massive'>Learn More</Button>
    <Button size='massive'>Search</Button>
  </div>

      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
    </Container>

    
  </div>
)

export default App;
