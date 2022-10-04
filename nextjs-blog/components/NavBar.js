import React from 'react';
import { 
    Menu,
    Image,
    Container } from 'semantic-ui-react';

export const NavBar = (props) => {
    return (
        <Menu fixed='top' inverted size='massive' style={{ background: '#547FE8', color: '#FFFFFF'}}>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='/bioPictures/logo3.png' style={{ marginRight: '1.5em' }} />
          Veneration Space
        </Menu.Item>
        <Menu.Item as='a' href="/">Home</Menu.Item>
        <Menu.Item as='a' href="/statpages/about">About</Menu.Item>
        <Menu.Item as='a' href="/statpages/apply">Apply</Menu.Item>
        <Menu.Item as='a' href="/statpages/login">Login</Menu.Item>
      </Container>
    </Menu>
    )
}
