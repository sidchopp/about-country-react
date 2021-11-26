// Not Using Nav at the moment..
import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const Nav = () => (
  <div style={{ margin: '30px' }}>
    <Segment padded raised  >
      <Header as='h3' >
        <div>This App will show an address and some useful information about the country based on User's location.</div>
      </Header>
    </Segment>
  </div>
)

export default Nav