import React from 'react';
import {Link} from 'react-router'
import {Navbar, NavItem} from 'react-materialize';
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';

export default class Footer_comp extends React.Component{
  render(){
    return (
    <div>
        <Footer size="mini">
          <FooterSection type="left" logo="Copyright © Stefano Barbier">
              <FooterLinkList>
                  <a target="_blank" href="https://github.com/StefanoBarbier?tab=repositories">GitHub</a>
                  <a href="/contact">Contact</a>
              </FooterLinkList>
          </FooterSection>
      </Footer>
    </div>
    )
  }
}