import React from 'react';
import { Message, Card } from 'semantic-ui-react';

const AboutMe = ()=>{
  return(
    <div >
      <Card centered fluid id="about_card"  color='orange' raised>
        <h2 style={{textAlign: "center"}}>Welcome to My Portfolio Site</h2>
        <Message.Content style={{lineHeight: "1.8", textAlign: "left", textIndent: "50px"}}>
    A computer enthusiast, loves to code and build things, likes to cook and watch TV, always excited to explore and learn new interesting things.
        </Message.Content>
      </Card>
    </div>
  )
}
export default AboutMe;
