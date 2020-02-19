import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdDelete } from 'react-icons/md';

import { formatPrice } from '../../util/format';
import * as FavActions from '../../store/modules/favorites/actions';

import { Container, BuildingsTable } from './styles';

export default function Favorites() {
  const favorites = useSelector(state =>
    state.favorite.map(building => ({
      ...building,
    }))
  );

  sessionStorage.setItem(favorites, 0);

  const [value] = useState(sessionStorage.getItem(favorites));

  useEffect(() => {
    sessionStorage.setItem(favorites, value);
  }, [favorites, value]);

  const dispatch = useDispatch();

  return (
    <Container>
      <BuildingsTable>
        <thead>
          <tr>
            <td colSpan="3">
              <span>Imóveis do seu sonho</span>
            </td>
          </tr>
        </thead>
        <tbody>
          {favorites.map(building => (
            <tr>
              <td>
                <strong>{building.name}</strong>

                <img
                  src={building.default_image['520x280']}
                  alt={building.name}
                />

                <p>{building.description}</p>
              </td>

              <td>
                <span>{formatPrice(building.min_price)}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(FavActions.removeFromFavorites(building.id))
                    }
                  >
                    <MdDelete size={20} color="#454a51" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </BuildingsTable>
    </Container>
  );
}
