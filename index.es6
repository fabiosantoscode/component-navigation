import React from 'react';
import Icon from '@economist/component-icon';
import StickyPosition from 'react-sticky-position';
import AutoHide from './autohide';
import Button from '@economist/component-link-button';
import GoogleSearch from '@economist/component-google-search';
import Balloon from '@economist/component-balloon';
import SectionsCard from '@economist/component-sections-card';
import context from '@economist/component-sections-card/context';
import Accordion from '@economist/component-accordion';
// Force media links to use icon as background.
context.media.forEach((mediaLink) => {
  mediaLink.icon = {
    useBackground: true,
    color: 'honolulu',
    icon: mediaLink.meta,
  };
});

const accordionContext = [
  {
    title: 'Sections',
    href: '/sections',
    children: context.sections,
  },
  {
    title: 'Blogs',
    href: '/blogs',
    children: context.blogs,
  },
  ...context.media,
  {
    title: 'Print Edition',
    href: '/printedition',
  },
  {
    title: 'Products',
    href: '/digital',
  },
];
export default class Navigation extends React.Component {

  static get propTypes() {
    return {
      className: React.PropTypes.string,
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]),
      links: React.PropTypes.arrayOf(React.PropTypes.object),
      autohide: React.PropTypes.bool,
      svgUri: React.PropTypes.string,
      userLoggedIn: React.PropTypes.bool,
      currentUrl: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      autohide: true,
    };
  }

  renderLoginLogout() {
    const destinationParameter = this.props.currentUrl ?
      '?destination=' + encodeURIComponent(this.props.currentUrl) :
      '';
    if (this.props.userLoggedIn) {
      const logoutUrl = 'https://www.economist.com/logout' + destinationParameter;
      return (
        <Button
          href={logoutUrl}
          className="navigation__user-menu-link navigation__user-menu-link--logout"
          icon={{ icon: 'user', size: '28px' }}
          unstyled
        >Log out</Button>
      );
    }
    const loginUrl = 'https://www.economist.com/user/login' + destinationParameter;
    const registerUrl = 'https://www.economist.com/user/register' + destinationParameter;
    return (
      <Balloon>
        <Button
          href={loginUrl}
          className="navigation__user-menu-link navigation__user-menu-link--login"
          icon={{ icon: 'user', size: '28px' }}
          unstyled
        >Log in</Button>
        <div>
          <Button
            shadow
            href={loginUrl}
            className="navigation__user-menu-log-in-button"
          >
            Log in to The Economist
          </Button>
          <span className="navigation__user-menu-register">
            New to The Economist?
            <a
              className="navigation__user-menu-register-link"
              href={registerUrl}
            >Register now</a>
          </span>
        </div>
      </Balloon>
    );
  }

  render() {
    const svgUri = { uri: this.props.svgUri } || {};
    const primaryNavigation = (
      <div className="navigation__primary" key="primary-navigation">
        <div className="navigation__primary-inner">
          <a href="http://www.economist.com" className="navigation__link-logo">
            <Icon icon="economist" size="64px" {...svgUri}/>
            <div className="navigation__link-empty-logo"></div>
          </a>
          <Balloon
            className="navigation__main-navigation-link navigation__mobile-accordion"
          >
            <a href="/Sections" className="navigation__sections-link">
              <Icon icon="hamburger" size="28px" color="white" />
              <Icon icon="close" size="28px" color="white" />
            </a>
            <Accordion list={accordionContext}/>
          </Balloon>
          <Balloon className="navigation__main-navigation-link navigation__main-sections-card">
            <a href="/Sections" className="navigation__sections-link">
              Sections
            </a>
            <div>
              <SectionsCard data={context} />
            </div>
          </Balloon>
          <a href="/printedition" className="navigation__main-navigation-link">
            Print edition
          </a>
          <a href="/digital" className="navigation__main-navigation-link">
            Products
          </a>
          <div className="navigation__primary-expander"></div>
          <div className="navigation__user-menu">
            {this.renderLoginLogout()}
          </div>
          <div className="navigation__search">
            <GoogleSearch/>
          </div>
        </div>
      </div>
    );
    const children = [ primaryNavigation ];
    let autohide = '';
    let bottomBar = '';
    if (this.props.autohide) {
      autohide = ' navigation--autohide';
      bottomBar = (<AutoHide className="navigation__secondary" key="secondary-autohide">
          {this.props.children}
        </AutoHide>);
    } else {
      bottomBar = (<div className="navigation__secondary" key="secondary">
          {this.props.children}
        </div>);
    }
    children.push(bottomBar);
    return (
      <StickyPosition className={`${this.props.className} ${autohide}`}>
         {children}
      </StickyPosition>
    );
  }
}
