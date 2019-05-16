import React from 'react';
import {Card, Icon, Popup, Label} from 'semantic-ui-react'
const HomeCard =(props)=>{
  return(
  <Card  centered fluid id="main_card">
    <Card.Content textAlign="center"><br/>
      <Card.Header textAlign="center">Yong Liang</Card.Header>
      <Card.Meta textAlign="center">Software Engineer</Card.Meta>
      <Card.Description textAlign="center">
        <p className="home_description"> - I'm a web developer in Seattle, a technology enthusiast who loves to write codes and build products.</p> <p className="home_description">To learn more about me and my works, please select one of the following:</p>
        {/*icon selections  */}
        <Popup trigger={<Label circular color="blue" as='a' onClick={props.handleMenuItem} id="project">Projects</Label>} content="Visit projects page"/>
        <Popup trigger={<Label circular color="blue" as='a' onClick={props.handleMenuItem} id="about">About</Label>} content="Visit about page"/>
        <Popup trigger={<Label circular color="blue" as='a' href="https://yongliang24.github.io/resume/" target="_blank"  rel="noopener noreferrer">Resume</Label>} content="Visit my resume {External Link}"/>
        <Popup trigger={<Label circular color="blue" as='a' href="https://dev.to/yongliang24" target="_blank"  rel="noopener noreferrer">Blogs</Label>} content="Visit my blogs {External Link}"/>
        <Popup trigger={<a href="https://github.com/YongLiang24" target="_blank" rel="noopener noreferrer"><Icon name='github' size="big"/></a>} content="Visit my github {External Link}"/>
        <Popup trigger={<a href="https://www.linkedin.com/in/yongliang24/" target="_blank" rel="noopener noreferrer"><Icon name='linkedin' size="big"/></a>} content="Visit my linkedin {External Link}"/>
      </Card.Description>
    </Card.Content>
  </Card>)
}
export default HomeCard;