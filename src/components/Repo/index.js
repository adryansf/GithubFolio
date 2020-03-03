import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import repoApi from '~/services/repoApi';

import { Container } from './styles';

export default function Repo({ repo }) {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    async function loadIcon() {
      try {
        await repoApi.get(`/${repo.full_name}/master/gitfolio/icon.png`);
        setIcon(
          `https://raw.githubusercontent.com/${repo.full_name}/master/gitfolio/icon.png`
        );
      } catch (e) {}
    }

    loadIcon();
  }, [repo.full_name]);

  return (
    <Container
      target="_blank"
      rel="noreferrer noopener"
      href={`https://${repo.owner.login}.github.io/${repo.name}`}
    >
      <header>
        {icon && <img src={icon} alt={`icon-${repo.name}`} />}
        <h3>{repo.name}</h3>
      </header>

      <p>{repo.description}</p>
    </Container>
  );
}

Repo.propTypes = {
  repo: PropTypes.shape({
    full_name: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
    }),
  }).isRequired,
};
