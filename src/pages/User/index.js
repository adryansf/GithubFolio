import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import intl from 'react-intl-universal';
import {
  MdLocationOn,
  MdCheck,
  MdWork,
  MdMarkunreadMailbox,
  MdArrowBack,
} from 'react-icons/md';
import { FaBlog } from 'react-icons/fa';

// Api
import api from '~/services/api';

// Components
import Language from '~/components/Language';
import Loader from '~/components/Loader';
import Repo from '~/components/Repo';
import GithubButton from '~/components/GithubButton';

import { Container, UserDescription, Repos } from './styles';

export default function User() {
  const { username } = useParams();
  const { state } = useLocation();
  const history = useHistory();

  const [user, setUser] = useState(state?.user ? state.user : {});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      if (!user.name) {
        try {
          const { data } = await api.get(`/users/${username}`);
          setUser(data);
        } catch (e) {
          history.push('/?not_found=true');
        }
      }

      // Get Repos

      const pages = Math.ceil(user.public_repos / 30);

      if (typeof pages === 'number') {
        let allRepos = [];

        for (let i = 1; i <= pages; i++) {
          try {
            const { data: reposPerPage } = await api.get(
              `/users/${username}/repos?page=${i}`
            );

            allRepos = [...allRepos, ...reposPerPage];
          } catch (e) {}
        }

        const repoData = allRepos.filter(repo => repo.has_pages === true);

        setRepos(repoData);
        setLoading(false);
      }
    }
    loadUser();
  }, [history, user, username]);

  function handleButtonBack() {
    history.push('/');
  }

  if (loading) {
    return (
      <Container
        style={{
          height: '100%',
        }}
      >
        <Loader />
      </Container>
    );
  }
  return (
    <Container>
      <Language />
      <button type="button" className="back" onClick={handleButtonBack}>
        <MdArrowBack />
      </button>
      <UserDescription>
        <img src={user.avatar_url} alt={user.name} />
        <h1>{user.name}</h1>
        <blockquote>{user.bio}</blockquote>
        {user?.location && (
          <span>
            <MdLocationOn size={25} color="#fff" />
            <span>{user.location}</span>
          </span>
        )}

        {user?.email && (
          <span>
            <MdMarkunreadMailbox size={25} color="#fff" />
            <span>{user.email}</span>
          </span>
        )}
        {user?.company && (
          <span>
            <MdWork size={25} color="#fff" />
            <span>{user.company}</span>
          </span>
        )}
        {user?.blog && (
          <span>
            <FaBlog size={25} color="#fff" />
            <span>{user.blog}</span>
          </span>
        )}
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={`${user.html_url}?tab=repositories`}
            >
              <MdCheck />
              {`${intl.get('user.repositories')}: ${user.public_repos}`}
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={`${user.html_url}?tab=followers`}
            >
              <MdCheck />
              {`${intl.get('user.followers')}:  ${user.followers}`}
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={`${user.html_url}?tab=following`}
            >
              <MdCheck />
              {`${intl.get('user.following')}:  ${user.following}`}
            </a>
          </li>
        </ul>
        <hr />
      </UserDescription>
      {repos[0] && (
        <Repos>
          <h1>{intl.get('user.repositories_with_pages')}</h1>
          <div>
            {repos.map(repo => (
              <Repo key={repo.full_name} repo={repo} />
            ))}
          </div>
        </Repos>
      )}

      <GithubButton username={username} />
    </Container>
  );
}
