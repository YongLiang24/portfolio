import React from 'react';
import { Message, Card } from 'semantic-ui-react';

const AboutMe = ()=>{
  return(
    <div >
      <Card centered fluid id="about_card"  color='orange' raised>
        <h2 style={{textAlign: "center"}}>Welcome to My Portfolio Site</h2>
        <Message.Content style={{lineHeight: "1.8", textAlign: "left"}}>
    A computer enthusiast, loves to code and build things, driven to complete difficult tasks. I enjoy learning new things and that helps me to pick up on required skills quickly.

      </Card>
    </div>
  )
}
export default AboutMe;
