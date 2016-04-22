import React from 'react';
import Button from '@economist/component-link-button';
import classnames from 'classnames';

/* eslint-disable object-shorthand */
export default function IconLink({
  className = '',
  icon,
  iconColor = 'thimphu',
  href,
  onClick,
  children,
  labelClassName,
}) {
  return (
    <Button
      href={href}
      onClick={onClick}
      className={classnames('navigation__main-navigation-link-button', className)}
      icon={{ icon: icon, color: iconColor, useBackground: true }}
      unstyled
    >
      <span
        className={classnames('navigation__main-navigation-link-label', labelClassName)}
      >
        {children}
      </span>
    </Button>
  );
}
/* eslint-enable object-shorthand */

if (process.env.NODE_ENV !== 'production') {
  IconLink.propTypes = {
    href: React.PropTypes.string,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
    icon: React.PropTypes.string,
    iconColor: React.PropTypes.string,
    children: React.PropTypes.node,
    labelClassName: React.PropTypes.string,
  };
}

