import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import React from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Button,
} from 'semantic-ui-react'

const Home = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
          Veneration Space
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>
        <Menu.Item as='a'>About</Menu.Item>
        <Menu.Item as='a'>Apply</Menu.Item>
        <Menu.Item as='a'>Login</Menu.Item>
      </Container>
    </Menu>

      

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

export default Home;
