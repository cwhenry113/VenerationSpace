import React from 'react'
import {
  Container,
  Image,
  Grid,
} from 'semantic-ui-react'
import { NavBar } from '/components/NavBar';
import { Search } from '/components/Search';
import { UserInput } from '/components/UserInput';
const src1 = 'https://images.unsplash.com/photo-1620506117452-99cd6b6dcd3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'



   export const MemorialExample = () => {
      return (
  <div>

    <NavBar />
    <Container text style={{ marginTop: '6em' }}>
    <Search />
    
    <Grid columns={2} relaxed='very'>
      <Grid.Column>

      <h2 style={{textAlign: "center"}}>Bob Smith</h2>
    <h2 style={{textAlign: "center"}}>1942-2022</h2>
    <Image src={src1} size='medium' centered />
    </Grid.Column>
    <Grid.Column>
      <p text style={{ marginTop: '6em' }}>
      Mr. Smith was loved by so many. This page was created to provide a space for all those who were touched by him to share stories, memories, photos and words of comfort. We are all missing him dearly. Join now to share your stories and memories you had with Mr. Smith. //Will have a lot more text but for now a couple sentences will do.Lorem ipsum dolor sit amet, conse
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      rabitur ullamcorper ultricies nisi.
    </p>

    </Grid.Column>
    </Grid>
    <h3 style={{textAlign: "center"}}>Add Memory</h3>
    <UserInput />
    </Container>

    <div class="ui divider"></div>

  </div>
      );
    };

  

