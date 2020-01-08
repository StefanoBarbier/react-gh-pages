import Header_comp from './header'
import Footer_comp from './footer'
import React, {Component} from 'react'
import {Layout} from 'react-mdl';

export default class Layout_comp extends React.Component  {
    render() {
        return (
               <div style={{height: '1000px', position: 'relative'}}>
    			<Layout style={{background: 'url(https://live.staticflickr.com/414/18360333244_54910b6bab_o.jpg) center / cover'}}>
	                <Header_comp />
	                {this.props.children}
	                <Footer_comp />
                </Layout>
            	</div>
        )
    }
}