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
  
    
      <Grid.Column>
      
      <h2 style={{textAlign: "center"}}>Thank you for submitting an appliciation to create a veneration!!</h2>
      <p text style={{ marginTop: '6em' }}>
      Your Veneration will be created shortly. A copy of your application will be sent to the email that was submitted. 
    </p>

       </Grid.Column>
   
    
    </Container>

    <div class="ui divider"></div>

  </div>
      );
    };
