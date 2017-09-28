import React from 'react';
import PropTypes from 'prop-types';
import Head from 'components/Head';
import Loading from 'components/Loading';

const Container = ({ children, title }) => (
  <div>
    {title && <Head page={title} />}
    {children || <Loading />}
  </div>
);

Container.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

export default Container;
