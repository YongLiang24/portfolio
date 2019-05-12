import React from 'react';
import { Menu} from 'semantic-ui-react'

const NavBar = (props)=> {
    return(
      <Menu fixed='top' inverted id="nav_container" borderless widths="4">
        <Menu.Item  as='a' onClick={props.handleMenuItem} id="home">Home</Menu.Item>
        <Menu.Item as='a' onClick={props.handleMenuItem} id="project">Projects</Menu.Item>
        <Menu.Item as='a' onClick={props.handleMenuItem} id="about">About</Menu.Item>
      </Menu>)
}
export default NavBar;
