import React from 'react'
import { Loader, Dimmer } from 'semantic-ui-react'

const Loading = () => <Dimmer active><Loader size='large' active inline='centered' >Loading..</Loader>
</Dimmer>
export default Loading;