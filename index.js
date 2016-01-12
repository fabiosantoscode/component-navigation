'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentIcon = require('@economist/component-icon');

var _economistComponentIcon2 = _interopRequireDefault(_economistComponentIcon);

var _reactStickyPosition = require('react-sticky-position');

var _reactStickyPosition2 = _interopRequireDefault(_reactStickyPosition);

var _autohide = require('./autohide');

var _autohide2 = _interopRequireDefault(_autohide);

var _economistComponentLinkButton = require('@economist/component-link-button');

var _economistComponentLinkButton2 = _interopRequireDefault(_economistComponentLinkButton);

var _economistComponentGoogleSearch = require('@economist/component-google-search');

var _economistComponentGoogleSearch2 = _interopRequireDefault(_economistComponentGoogleSearch);

var _economistComponentBalloon = require('@economist/component-balloon');

var _economistComponentBalloon2 = _interopRequireDefault(_economistComponentBalloon);

var _economistComponentSectionsCard = require('@economist/component-sections-card');

var _economistComponentSectionsCard2 = _interopRequireDefault(_economistComponentSectionsCard);

var _economistComponentSectionsCardContext = require('@economist/component-sections-card/context');

var _economistComponentSectionsCardContext2 = _interopRequireDefault(_economistComponentSectionsCardContext);

var _economistComponentAccordion = require('@economist/component-accordion');

var _economistComponentAccordion2 = _interopRequireDefault(_economistComponentAccordion);

// Force media links to use icon as background.
_economistComponentSectionsCardContext2['default'].media.forEach(function (mediaLink) {
  mediaLink.icon = {
    useBackground: true,
    color: 'honolulu',
    icon: mediaLink.meta
  };
});

var accordionContext = [{
  title: 'Sections',
  href: '/sections',
  children: _economistComponentSectionsCardContext2['default'].sections
}, {
  title: 'Blogs',
  href: '/blogs',
  children: _economistComponentSectionsCardContext2['default'].blogs
}].concat(_economistComponentSectionsCardContext2['default'].media, [{
  title: 'Print Edition',
  href: '/printedition'
}, {
  title: 'Products',
  href: '/digital'
}]);

var Navigation = (function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    _React$Component.apply(this, arguments);
  }

  Navigation.prototype.renderLoginLogout = function renderLoginLogout() {
    var destinationParameter = this.props.currentUrl ? '?destination=' + encodeURIComponent(this.props.currentUrl) : '';
    if (this.props.userLoggedIn) {
      var logoutUrl = 'https://www.economist.com/logout' + destinationParameter;
      return _react2['default'].createElement(
        _economistComponentLinkButton2['default'],
        {
          href: logoutUrl,
          className: 'navigation__user-menu-link navigation__user-menu-link--logout',
          icon: { icon: 'user', size: '28px' },
          unstyled: true
        },
        'Log out'
      );
    }
    var loginUrl = 'https://www.economist.com/user/login' + destinationParameter;
    var registerUrl = 'https://www.economist.com/user/register' + destinationParameter;
    return _react2['default'].createElement(
      _economistComponentBalloon2['default'],
      null,
      _react2['default'].createElement(
        _economistComponentLinkButton2['default'],
        {
          href: loginUrl,
          className: 'navigation__user-menu-link navigation__user-menu-link--login',
          icon: { icon: 'user', size: '28px' },
          unstyled: true
        },
        'Log in'
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _economistComponentLinkButton2['default'],
          {
            shadow: true,
            href: loginUrl,
            className: 'navigation__user-menu-log-in-button'
          },
          'Log in to The Economist'
        ),
        _react2['default'].createElement(
          'span',
          { className: 'navigation__user-menu-register' },
          'New to The Economist?',
          _react2['default'].createElement(
            'a',
            {
              className: 'navigation__user-menu-register-link',
              href: registerUrl
            },
            'Register now'
          )
        )
      )
    );
  };

  Navigation.prototype.render = function render() {
    var svgUri = { uri: this.props.svgUri } || {};
    var primaryNavigation = _react2['default'].createElement(
      'div',
      { className: 'navigation__primary', key: 'primary-navigation' },
      _react2['default'].createElement(
        'div',
        { className: 'navigation__primary-inner' },
        _react2['default'].createElement(
          'a',
          { href: 'http://www.economist.com', className: 'navigation__link-logo' },
          _react2['default'].createElement(_economistComponentIcon2['default'], _extends({ icon: 'economist', size: '64px' }, svgUri)),
          _react2['default'].createElement('div', { className: 'navigation__link-empty-logo' })
        ),
        _react2['default'].createElement(
          _economistComponentBalloon2['default'],
          {
            className: 'navigation__main-navigation-link navigation__mobile-accordion'
          },
          _react2['default'].createElement(
            'a',
            { href: '/Sections', className: 'navigation__sections-link' },
            _react2['default'].createElement(_economistComponentIcon2['default'], { icon: 'hamburger', size: '28px', color: 'white' }),
            _react2['default'].createElement(_economistComponentIcon2['default'], { icon: 'close', size: '28px', color: 'white' })
          ),
          _react2['default'].createElement(_economistComponentAccordion2['default'], { list: accordionContext })
        ),
        _react2['default'].createElement(
          _economistComponentBalloon2['default'],
          { className: 'navigation__main-navigation-link navigation__main-sections-card' },
          _react2['default'].createElement(
            'a',
            { href: '/Sections', className: 'navigation__sections-link' },
            'Sections'
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(_economistComponentSectionsCard2['default'], { data: _economistComponentSectionsCardContext2['default'] })
          )
        ),
        _react2['default'].createElement(
          'a',
          { href: '/printedition', className: 'navigation__main-navigation-link' },
          'Print edition'
        ),
        _react2['default'].createElement(
          'a',
          { href: '/digital', className: 'navigation__main-navigation-link' },
          'Products'
        ),
        _react2['default'].createElement('div', { className: 'navigation__primary-expander' }),
        _react2['default'].createElement(
          'div',
          { className: 'navigation__user-menu' },
          this.renderLoginLogout()
        ),
        _react2['default'].createElement(
          'div',
          { className: 'navigation__search' },
          _react2['default'].createElement(_economistComponentGoogleSearch2['default'], null)
        )
      )
    );
    var children = [primaryNavigation];
    var autohide = '';
    var bottomBar = '';
    if (this.props.autohide) {
      autohide = ' navigation--autohide';
      bottomBar = _react2['default'].createElement(
        _autohide2['default'],
        { className: 'navigation__secondary', key: 'secondary-autohide' },
        this.props.children
      );
    } else {
      bottomBar = _react2['default'].createElement(
        'div',
        { className: 'navigation__secondary', key: 'secondary' },
        this.props.children
      );
    }
    children.push(bottomBar);
    return _react2['default'].createElement(
      _reactStickyPosition2['default'],
      { className: this.props.className + ' ' + autohide },
      children
    );
  };

  _createClass(Navigation, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        className: _react2['default'].PropTypes.string,
        children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.element), _react2['default'].PropTypes.element]),
        links: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.object),
        autohide: _react2['default'].PropTypes.bool,
        svgUri: _react2['default'].PropTypes.string,
        userLoggedIn: _react2['default'].PropTypes.bool,
        currentUrl: _react2['default'].PropTypes.string
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        autohide: true
      };
    }
  }]);

  return Navigation;
})(_react2['default'].Component);

exports['default'] = Navigation;
module.exports = exports['default'];