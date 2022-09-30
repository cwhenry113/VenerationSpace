import React from 'react';
import { 
    Menu,
    Image,
    Container } from 'semantic-ui-react';

export const NavBar = (props) => {
    return (
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
    )
}
