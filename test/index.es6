import Navigation from '../index.es6';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import links from '../links';

const registered = [ links.subscribe, links.myeconomist, links.logout ];
describe(`A navigation`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      Navigation.should.be.a('function').and.respondTo('render');
    });
    it(`it's renders a React element`, () => {
      React.isValidElement(
        <Navigation
          className="navigation navigation--registered navigation--sticked"
          links={registered}
        />).should.equal(true);
    });
  });
  describe('login/logout button', () => {
    it('is a link to /user/login?destination={this.props.currentUrl}', () => {
      const instance = new Navigation({
        currentUrl: '/foo/bar'
      });
      const loginLogoutButton = TestUtils.renderIntoDocument(
        instance.renderLoginLogout()
      );
      const linkButton = TestUtils.findRenderedDOMComponentWithClass(
        loginLogoutButton,
        'navigation__user-menu-link'
      );
      linkButton.props.href.should.equal('https://www.economist.com/user/login?destination=%2Ffoo%2Fbar')
    });
    it('When the user is logged in it\'s a link to /logout?destination={this.props.currentUrl}', () => {
      const instance = new Navigation({
        currentUrl: '/foo/bar',
        userLoggedIn: true,
      });
      instance.renderLoginLogout()
        .props.href.should.equal('https://www.economist.com/logout?destination=%2Ffoo%2Fbar')
    });
  });
});
