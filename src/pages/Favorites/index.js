import React from 'react';
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

  const dispatch = useDispatch();

  return (
    <Container>
      <BuildingsTable>
        <thead>
          <tr>
            <th />
            <th>Imóveis do seu sonho</th>
            <th />
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
