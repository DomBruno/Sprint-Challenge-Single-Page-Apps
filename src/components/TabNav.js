import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

 
// TODO: Add missing tabs below
const Nav = props => (
    <NavLink exact {...props}
     activeClassName='active'/>
);


    const panes = [
        {menuItem: <Menu.Item key='home' as={Nav} to={'/'} content="Home" />},
        {menuItem: <Menu.Item key='characters' as={Nav} to={'/characters'} content="Characters" />},
        {menuItem: <Menu.Item key='location' as={Nav} to={'/locations'} content="Locations" />},
        {menuItem: <Menu.Item key='episodes' as={Nav} to={'/episodes'} content="Episodes" />}
    ]
      

    
      const TabNav = () => <Tab panes={panes} />
      export default TabNav