import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import intl from 'react-intl-universal';

// Api
import api from '~/services/api';

// Components
import Language from '~/components/Language';
import Star from '~/components/StarButton';
import Logo from '~/components/Logo';
import Loader from '~/components/Loader';
import Footer from '~/components/Footer';

// Styles
import { Container } from './styles';

export default function Home() {
  const location = useLocation();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(location.search);

    if (query.get('not_found')) {
      toast.error(intl.get('messages.user_not_found'));
    }
  }, [location]);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const { data: user } = await api.get(`/users/${username}`);

      history.push(`/${username}`, { user });
    } catch (error) {
      toast.error(intl.get('messages.user_not_found'));
    }

    setLoading(false);
  }

  return (
    <Container>
      <Star />
      <Language />
      <form onSubmit={handleSubmit}>
        <Logo size="normal" />
        <input
          type="text"
          placeholder={intl.get('home.username_input')}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">
          {loading ? <Loader /> : intl.get('home.button_submit')}
        </button>
      </form>
      <Footer />
    </Container>
  );
}
