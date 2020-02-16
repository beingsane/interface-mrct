import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdFavorite } from 'react-icons/md';

import { Container, Favorites } from './styles';

import logo from '../../assets/images/logo.png';

export default function Header() {
  const favoriteSize = useSelector(state => state.favorite.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="MRCT" />
      </Link>

      <Favorites to="/favorites">
        <div>
          <strong>Lista de desejos</strong>
          <span>{favoriteSize} favoritos</span>
        </div>
        <MdFavorite size={36} color="#ff0000" />
      </Favorites>
    </Container>
  );
}
