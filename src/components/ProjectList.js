import React from 'react';
import { List, Modal } from 'semantic-ui-react';

const ProjectList =(props)=>{
  return(
    <div style={{textAlign: "center"}}>
      <List   relaxed size="huge">
        <List.Header>Web Applications:</List.Header>
        {/*Project 1  */}
        <Modal trigger={<List.Item as="a" >Metro Pizza</List.Item>} size="large" style={{textAlign: "center", fontSize: "1.3em"}}>
          <Modal.Header>Metro Pizza</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <p style={{fontStyle: "italic"}}>Metro Pizza allows customers to add menu items to cart, then submit the orders online. Those orders will send to an administrator site.</p>
              <p>Try it at: <a href="https://yongliang24.github.io/frontend_customers_metro_pizza/" target="_blank" rel="noopener noreferrer">https://yongliang24.github.io/frontend_customers_metro_pizza/</a> <br/><br/>Administrator site: <a href="https://yongliang24.github.io/frontend_admin_metro_pizza/" target="_blank" rel="noopener noreferrer">https://yongliang24.github.io/frontend_admin_metro_pizza/</a></p> <p>Github Repo: <a href="https://github.com/YongLiang24/frontend_customers_metro_pizza" target="_blank" rel="noopener noreferrer">https://github.com/YongLiang24/frontend_customers_metro_pizza</a></p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Content>
            <p style={{color: "teal"}}>Technologies used: Rails API Backend, React.js, Semantic UI, Javascript Web Token, digest/salted passwords, Fetch API Requests, MVP development design, Models relations, PostgreSQL</p> <p>Date Created: May 2019</p>
          </Modal.Content>
        </Modal>
        {/*Project 2  */}
        <Modal trigger={<List.Item as="a" >Pictionary Online</List.Item>} size="large" style={{textAlign: "center", fontSize: "1.3em"}}>
          <Modal.Header>Pictionary Online</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <p style={{fontStyle: "italic"}}>Pictionary Online a simple way to play pictionary game online with friends. The guessers will see live drawing updates and able to send guesses to the drawer.</p>
              <p>Try it at: <a href="https://yongliang24.github.io/pictionary-online/#/" target="_blank" rel="noopener noreferrer">https://yongliang24.github.io/pictionary-online/#/</a></p>
              <p>Github Repo: <a href="https://github.com/YongLiang24/pictionary-online" target="_blank" rel="noopener noreferrer">https://github.com/YongLiang24/pictionary-online</a></p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Content>
            <p style={{color: "teal"}}>Technologies used: HTML Canvas, React Hash Routes, Rails API Backend, React.js, Fetch API Requests, MVP development design, Models relations, PostgreSQL</p> <p>Date Created: April 2019</p>
          </Modal.Content>
        </Modal>
        {/*Project 3  */}
        <Modal trigger={<List.Item as="a" >Translatr</List.Item>} size="large" style={{textAlign: "center", fontSize: "1.3em"}}>
          <Modal.Header>Translatr</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <p style={{fontStyle: "italic"}}>Translatr is a utility to create trips, translate and save common phrases you’ll use for that trip.</p>
              <p>Try it at: <a href="https://yongliang24.github.io/translatr-frontend/" target="_blank" rel="noopener noreferrer">https://yongliang24.github.io/translatr-frontend/</a></p>
              <p>Github Repo: <a href="https://github.com/YongLiang24/translatr-frontend" target="_blank" rel="noopener noreferrer">https://github.com/YongLiang24/translatr-frontend</a></p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Content>
            <p style={{color: "teal"}}>Technologies used: Google Cloud Translation API, World Bank Currency API, Rails Backend, HTML5, Javascript, CSS3, Fetch API Requests, MVP development design, Models relations, PostgreSQL</p> <p>Date Created: March 2019</p>
          </Modal.Content>
        </Modal>
        <br/><hr/>
        <List.Header>(Older Projects) Android Applications:</List.Header>
        {/*Project 1  */}
        <Modal trigger={<List.Item as="a" >AxeMan X</List.Item>} size="large" style={{textAlign: "center", fontSize: "1.3em"}}>
          <Modal.Header>AxeMan X</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <p style={{fontStyle: "italic"}}>AxeMan X is a horror theme, auto run, side-scroll action game. Throw axe, cast spells to perish the Reaper and his minions.</p>
              <p>Try it at: <a href="https://play.google.com/store/apps/details?id=com.AxeMan88.Test&hl=en_US" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.AxeMan88.Test&hl=en_US</a></p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Content>
            <p style={{color: "teal"}}>Technologies used: Unity 2D, C#, Sprite-Sheet Animation, custom pixel arts, Particle Effects</p> <p>Date Created: June 2018</p>
          </Modal.Content>
        </Modal>
        {/* Project 2 */}
        <Modal trigger={<List.Item as="a" >Burger Sim</List.Item>} size="large" style={{textAlign: "center", fontSize: "1.3em"}}>
          <Modal.Header>Burger Sim</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <p style={{fontStyle: "italic"}}>Burger Sim is a casual burgers and hotdogs making simulation game. Players create new items based on the objective's specifications to complete the level.</p>
              <p>Try it at: <a href="https://play.google.com/store/apps/details?id=com.AxeMan88.Test&hl=en_US" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.AxeMan88.Test&hl=en_US</a></p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Content>
            <p style={{color: "teal"}}>Technologies used: Unity 2D, C#, Sprite-Sheet Animation, Particle Effects</p> <p>Date Created: May 2018</p>
          </Modal.Content>
        </Modal>
        {/* project 3 */}
        <Modal trigger={<List.Item as="a" >易学英文(Simple English Learning)</List.Item>} size="large" style={{textAlign: "center", fontSize: "1.3em"}}>
          <Modal.Header>易学英文(Simple English Learning)</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <p style={{fontStyle: "italic"}}>Simple English Learning is an english language learning app for native chinese speakers. Over 1000 common used vocabularies and implemented chapters, tests, sounds and images for each vocabulary.</p>
              <p>Try it at: <a href="https://play.google.com/store/apps/details?id=com.englih.yong" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.englih.yong</a></p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Content>
            <p style={{color: "teal"}}>Technologies used: GameSalad game engine, Sprite-Sheet Animation</p> <p>Date Created: September 2017</p>
          </Modal.Content>
        </Modal>
      </List>
    </div>
  )
}
export default ProjectList;
