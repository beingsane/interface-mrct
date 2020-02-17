import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MdFavoriteBorder } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as FavActions from '../../store/modules/favorites/actions';

import { BuildingsList } from './styles';

export default function Home() {
  const [data, setData] = useState({ buildings: [] });
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadBuildings() {
      const response = await api.get();

      setData(response.data);
    }

    loadBuildings();
  }, []);

  function handleAddBuilding(id) {
    dispatch(FavActions.addToFavoritesRequest(id));
  }

  return (
    <BuildingsList>
      {data.buildings.map(building => (
        <li key={building.id}>
          <strong>{building.name}</strong>
          <img src={building.default_image['520x280']} alt={building.name} />
          <span>{building.address.city}</span>
          <p>{building.address.area}</p>

          <span>{formatPrice(building.min_price)}</span>

          <button type="button" onClick={() => handleAddBuilding(building.id)}>
            <div>
              <MdFavoriteBorder size={16} color="#fff" />
            </div>

            <span>Adicionar à sua lista de favoritos</span>
          </button>
        </li>
      ))}
    </BuildingsList>
  );
}
