import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdDelete } from 'react-icons/md';

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
                <img src={building.default_image} alt={building.name} />
              </td>
              <td>
                <strong>{building.name}</strong>
                <span>{building.priceFormatted}</span>
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
