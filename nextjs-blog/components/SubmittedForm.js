import React from 'react'
import {
  Container,
  Grid,
} from 'semantic-ui-react'
import { NavBar } from './components/NavBar';


   export const SubmittedForm = () => {
      return (
  <div>

    <NavBar />
    <Container text style={{ marginTop: '6em' }}>
  
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
      
      <h2 style={{textAlign: "center"}}>Thank you for creating a Veneration!</h2>
      <p text style={{ marginTop: '6em' }}>
      Your Veneration will be created shortly. A copy of your application will be sent to the email that was submitted. 
    </p>

       </Grid.Column>
    </Grid>
    
    </Container>

    <div class="ui divider"></div>

  </div>
      );
    };
