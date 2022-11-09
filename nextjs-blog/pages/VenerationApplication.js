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
  <div>
    <NavBar />
        
    <Container text style={{ marginTop: '6em' }}>  
        
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
      
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf6rhkqn_sy0R8FSweQtVNXPGFoJJg2hrXHF9l6xxN9USgpEg/viewform?embedded=true" width="640" height="1714" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>    </Grid.Column>
     </Grid>
    
    </Container>

    <div className="ui divider"></div>
    <div className="ui tabular menu"><a class="active item">Bio</a><a class="item">Photos</a></div>

  </div>
      );
    };
