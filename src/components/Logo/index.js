import React from 'react';
import PropTypes from 'prop-types';
import { IoLogoGithub } from 'react-icons/io';
import { GoBrowser } from 'react-icons/go';

import { Container } from './styles';

export default function Logo({ size }) {
  return (
    <Container size={size}>
      <GoBrowser />
      <IoLogoGithub />
      <h1>GithubFolio</h1>
    </Container>
  );
}

Logo.propTypes = {
  size: PropTypes.string,
};

Logo.defaultProps = {
  size: 'normal',
};
