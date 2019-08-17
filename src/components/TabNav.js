import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
    const panes = [
        { menuItem: 'Tab 1', render: () => <Tab.Pane>Home</Tab.Pane> },
        { menuItem: 'Tab 2', render: () => <Tab.Pane>Characters</Tab.Pane> },
        { menuItem: 'Tab 3', render: () => <Tab.Pane>Locations</Tab.Pane> },
        { menuItem: 'Tab 4', render: () => <Tab.Pane>Episodes</Tab.Pane> },
      ]
      

    
      const TabNav = () => <Tab panes={panes} />
    
      return TabNav;


};
