import React from 'react'
import {
  Container,
  Grid,
} from 'semantic-ui-react'
import { NavBar } from '/components/NavBar';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'



  export default function VenerationApplication() {
      return (
  <div style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover' }}>
    <NavBar />
        
    <Container text style={{ paddingTop: '6em' }}>  
        
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
      
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf6YlL-KPfVMK6aek1B7JhwEVwgPc2fk5X_IHgqnGv2iR194g/viewform?embedded=true" width="640" height="1714" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></Grid.Column>
     </Grid>
    
    </Container>

  </div>
      );
    };
