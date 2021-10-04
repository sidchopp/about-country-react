// Not Using Nav at the moment..
import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const Nav = () => (
  <div style={{ margin: '30px' }}>
    <Header as='h2' textAlign='center'>
      <a href='https://www.linkedin.com/in/sidchopp/' rel="noreferrer" target='_blank'><Icon inverted name='linkedin' circular /></a>
      <a href='https://github.com/sidchopp/' target='_blank' rel="noreferrer" ><Icon inverted name='github' circular /></a>
    </Header>
  </div>
)

export default Nav