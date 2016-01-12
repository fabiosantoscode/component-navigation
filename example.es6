if (typeof document === 'object') {
  require('svg4everybody')();
}

import Navigation from './index';
import SubscribeMessage from '@economist/component-subscribe-message';
import React from 'react';

export default (
  <div>
    <div>
        <Navigation className="navigation navigation--registered navigation--sticked"
          svgUri="assets/icons.svg"
          autohide={false}
        >
          <SubscribeMessage counter="1/3"/>
        </Navigation>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
    </div>
    <div>
      <Navigation className="navigation navigation--registered navigation--sticked"
          svgUri="assets/icons.svg"
          userLoggedIn={true}
          autohide={false} />
    </div>
  </div>
);
