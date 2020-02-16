import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';

import { MdFavoriteBorder } from 'react-icons/md';
// import { formatPrice } from '../../util/format';
import api from '../../services/api';

// import * as FavActions from '../../store/modules/favorites/actions';

import { BuildingsList } from './styles';

export default function Home() {
  const [buildings, setBuildings] = useState([]);

  // const dispatch = useDispatch();

  useEffect(() => {
    async function loadBuildings() {
      const response = await api.get();
      const data = response.data.map(building => ({
        ...building,
        // priceFormatted: formatPrice(product.price),
      }));

      setBuildings(data);
    }

    loadBuildings();
  }, []);

  /* function handleAddBuilding(id) {
    dispatch(FavActions.addToFavoritesRequest(id));
  } */

  return (
    <BuildingsList>
      {buildings.map(building => (
        <li key={building.id}>
          <strong>{building.name}</strong>
          <img
            src="https://s3.amazonaws.com/uploaded.prod.corretordireto/images/properties/thumb/253299.jpeg?1580810714"
            alt={building.name}
          />
          <span>Área máxima: 114m²</span>
          <span>Área mínima: 114m²</span>

          <span>R$ 980.000</span>

          <button
            type="button" /* onClick={() => handleAddBuilding(building.id)} */
          >
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
