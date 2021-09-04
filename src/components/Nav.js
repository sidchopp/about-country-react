import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const Nav = () => (
  <div style={{ margin: '30px' }}>
    <Header as='h2' textAlign='center'>
      <a href='https://www.linkedin.com/in/sidchopp/' target='_blank'><Icon inverted name='linkedin' color='linkedin' circular /></a>
      <a href='https://github.com/sidchopp/' target='_blank'><Icon inverted color='github' name='github' circular /></a>
    </Header>
  </div>
)

export default Nav