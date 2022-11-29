import React from 'react';
import { 
    Menu,
    Image,
    Container } from 'semantic-ui-react';
    import { signOut, useSession } from 'next-auth/react'

export const NavBar = (props) => {
  
  const { data: session, status } = useSession()
    return (
        <Menu fixed='top' inverted size='massive' style={{ background: '#547FE8', color: '#FFFFFF'}}>
      <Container>
        <Menu.Item header>
          <Image size='mini' src='/bioPictures/logo3.png' style={{ marginRight: '1.5em' }} />
          Veneration Space
        </Menu.Item>
        <Menu.Item as='a' href="/">Home</Menu.Item>
        {!session && (
          <>
           <Menu.Item as='a' href="/VenerationApplication">Apply</Menu.Item>
          </>
        )}
        {session && session.guardian == 'false' && (
          <>
           <Menu.Item as='a' href="/VenerationApplication">Apply</Menu.Item>
          </>
        )}
        <Menu.Item as='a' href="/statpages/search">Search</Menu.Item>
        {session && session.guardian == 'true' && (
          <>
        <Menu.Item as='a' href="/create">Create</Menu.Item>
          </>
        )}
        
        {!session && (
          <><Menu.Item as='a' href="/statpages/login">Login<br /></Menu.Item>
            
          </>
        )}
      {session && (
          <><Menu.Item>Signed in as {session.user.name}<br /></Menu.Item>
            
          </>
        )}
          
          {!session && (
          <>
            <Menu.Item as='a' href="/statpages/signup">Sign Up</Menu.Item>
          </>
        )}
      {session && (
          <>
            <Menu.Item onClick={_ => signOut()}>Sign Out</Menu.Item>
          </>
        )}
        
      </Container>
    </Menu>
    )
}
