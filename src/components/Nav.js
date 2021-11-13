// Not Using Nav at the moment..
import React from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'

const Nav = () => (
  <div style={{ margin: '30px' }}>
    <Segment padded raised  >
      <Header as='h3' >
        <div>This App will show an address and some useful information about the country based on User's location.</div>
        {/* <a href='https://www.linkedin.com/in/sidchopp/' rel="noreferrer" target='_blank'><Icon inverted name='linkedin' circular /></a>
        <a href='https://github.com/sidchopp/' target='_blank' rel="noreferrer" ><Icon inverted name='github' circular /></a> */}
      </Header>
    </Segment>
  </div>
)

export default Nav