import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import { GoMarkGithub } from 'react-icons/go';

import { Container } from './styles';

export default function GithubButton({ username }) {
  return (
    <Container
      target="_blank"
      rel="noreferrer noopener"
      href={`https://github.com/${username}?tab=repositories`}
    >
      <GoMarkGithub size={30} />
      {intl.get('view_on_github')}
    </Container>
  );
}

GithubButton.propTypes = {
  username: PropTypes.string.isRequired,
};
