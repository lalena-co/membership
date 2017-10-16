import React from 'react';
import PropTypes from 'prop-types';
import { classes as c, colors } from 'stylesheet';

const defaultColor = variant => {
  switch (variant) {
    default:
      return colors.black;
  }
}

const Text = (props) => {
  let { variant, style, children, color, classes } = props;
  let combined = `${c[color || defaultColor(variant)]} ${classes} ${c[variant]}`;
  style = { ...style, transition: 'color 300ms ease' };

  switch (variant) {
    case 'h1':
      return <h1 style={style} className={combined}>{children}</h1>;
    case 'h2':
      return <h2 style={style} className={combined}>{children}</h2>;
    case 'h3':
      return <h3 style={style} className={combined}>{children}</h3>;
    case 'h4':
      return <h4 style={style} className={combined}>{children}</h4>;
    case 'h5':
      return <h5 style={style} className={combined}>{children}</h5>;
    case 'h6':
      return <h6 style={style} className={combined}>{children}</h6>;
    case 'span':
      return <span style={style} className={combined}>{children}</span>;
    default:
      return <p style={style} className={combined}>{children}</p>;
  }
};

Text.propTypes = {
  variant: PropTypes.string,
  style: PropTypes.object,
  classes: PropTypes.string,
}

Text.defaultProps = {
  style: {},
  variant: 'p',
  children: '',
  classes: '',
}

export default Text;
