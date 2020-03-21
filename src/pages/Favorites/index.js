import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { MdDelete } from 'react-icons/md';

import { formatPrice } from '~/util/format';
import * as FavActions from '~/store/modules/favorites/actions';

import { Container, Cards, Building, Details, Footer } from './styles';

export default function Favorites() {
  const favorites = useSelector(state =>
    state.favorite.map(building => ({
      ...building,
    }))
  );

  const dispatch = useDispatch();

  const handleRemoveFavorite = building => {
    dispatch(FavActions.removeFromFavorites(building));
  };

  return (
    <Container>
      <Cards>
        {favorites.map(building => (
          <>
            <Building>
              <img
                src={building.default_image['520x280']}
                alt={building.name}
              />
              <div>
                <strong>{building.name}</strong>
              </div>
              <Details>
                <strong>{formatPrice(building.min_price)}</strong>
                <p>{building.address.city}</p>
                <span>{building.description}</span>
              </Details>
              <button
                type="button"
                onClick={() => handleRemoveFavorite(building.id)}
              >
                <MdDelete size={20} color="#454a51" />
              </button>
            </Building>
          </>
        ))}
      </Cards>
      <Footer>
        <Link
          to={{
            pathname: '/',
          }}
        >
          <button type="button">Home</button>
        </Link>
      </Footer>
    </Container>
  );
}
