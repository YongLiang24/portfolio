import React from 'react';
import { Message, Card } from 'semantic-ui-react';

const AboutMe = ()=>{
  return(
    <div >
      <Card centered fluid id="about_card"  color='orange' raised>
        <h2 style={{textAlign: "center"}}>Welcome to My Portfolio Site</h2>
        <Message.Content style={{lineHeight: "1.8", textAlign: "left", textIndent: "50px"}}>
          Hi there, this is my story: I moved to Seattle in 2016, with a goal to study programming. Before that, I worked as a chef in Puerto Rico for five years. I studied software development in college, and completed a full stack web development program at Flatiron Coding Bootcamp. Transitioning to the tech world was really fun and exciting. I really enjoy the process of building software applications. Moving into professional development is the next step in my mind. Being at a company where I can grow and work toward something meaningful is important to me.
        </Message.Content>
      </Card>
    </div>
  )
}
export default AboutMe;
