import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';
import Menu from "./Menu";

export default class Header extends React.Component {
    render() {
        let menu = _.get(this.props, 'pageContext.menus.main');
        return (
            <header id="masthead" className="site-header outer">
              <div className="inner">
                <div className="site-header-inside">
                  <div className="site-branding">
                    {_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img') && 
                    <p className="site-logo">
                      <Link to={safePrefix('/')}>
                        <img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img'))} alt="Logo" />
                      </Link>
                    </p>
                    }
                    {((_.get(this.props, 'pageContext.frontmatter.template') === 'landing') || (_.get(this.props, 'pageContext.frontmatter.template') === 'blog')) ? 
                    <h1 className="site-title"><Link to={safePrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</Link></h1>
                     : 
                    <p className="site-title"><Link to={safePrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</Link></p>
                    }
                  </div>
                  {menu && _.get(this.props, 'pageContext.site.siteMetadata.header.has_nav') && <React.Fragment>
                  <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
                    <div className="site-nav-inside">
                      <button id="menu-close" className="menu-toggle"><span className="screen-reader-text">Open Menu</span><span
                          className="icon-close" aria-hidden="true" /></button>
                      <Menu {...this.props} menu={menu} menu_class={'menu'} page={this.props.pageContext}/>
                    </div>
                  </nav>
                  <button id="menu-open" className="menu-toggle"><span className="screen-reader-text">Close Menu</span><span className="icon-menu"
                      aria-hidden="true" /></button>
                  </React.Fragment>}
                </div>
              </div>
            </header>
        );
    }
}
