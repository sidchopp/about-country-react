import React from 'react'
import { Header, Icon, Popup } from 'semantic-ui-react'

function Footer() {
  return (
    <div>
      <Header as='h1'  >
        <a
          style={{ color: 'black' }}
          href='https://sid-projects.netlify.app/'
          target='_blank'
          rel="noreferrer"
        >
          <Popup
            position='right center'
            content='About Me'
            trigger={
              <span className="footer-name">
                Sid{" "}
              </span>
            }
          />
        </a>
      </Header>
      <div>
        <a
          href='https://www.linkedin.com/in/sidchopp/'
          rel="noreferrer"
          target='_blank'
        >
          <Icon circular color='black' name='linkedin' />
        </a>
        <a
          href='https://github.com/sidchopp/'
          target='_blank'
          rel="noreferrer"
        >
          <Icon circular name='github' color='black' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
