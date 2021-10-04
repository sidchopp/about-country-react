import React from 'react'

import { Header, Icon, Divider } from 'semantic-ui-react'

function Footer() {
  return (
    <div>
      <div >
        <Header as='h3'  >
          <div >
            <a style={{ color: 'black' }} href='https://sid-projects.netlify.app/' target='_blank' rel="noreferrer" >
              <Icon fitted name='stripe s' />iddharth
              {" "}
              <Icon fitted name='cuttlefish' />hopra
            </a>
          </div>
        </Header>
        <div>
          <a href='https://www.linkedin.com/in/sidchopp/' rel="noreferrer" target='_blank'>
            <Icon circular color='black' name='linkedin' />
          </a>
          <a href='https://github.com/sidchopp/' target='_blank' rel="noreferrer" >
            <Icon circular name='github' color='black' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
