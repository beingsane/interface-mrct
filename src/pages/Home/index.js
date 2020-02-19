import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MdFavorite } from 'react-icons/md';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as FavActions from '../../store/modules/favorites/actions';

import { BuildingsList, Container } from './styles';

export default function Home() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({ buildings: [] });
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadBuildings() {
      const response = await api.get('buildings', {
        params: {
          page,
        },
      });
      setData(response.data);
    }

    loadBuildings();
  }, [page]);

  function handlePrev() {
    setPage(page - 1);
  }

  function handleNext() {
    setPage(page + 1);
  }

  function handleAddFavorite(building) {
    dispatch(FavActions.addToFavorites(building));
  }

  return (
    <Container>
      <BuildingsList>
        {data.buildings.map(building => (
          <li key={building.id}>
            <strong>{building.name}</strong>
            <img src={building.default_image['520x280']} alt={building.name} />
            <span>{building.address.city}</span>
            <p>{building.address.area}</p>
            <span>{formatPrice(building.min_price)}</span>
            <button type="button" onClick={() => handleAddFavorite(building)}>
              <div>
                <MdFavorite size={16} color="#fff" />
              </div>
              <span>Adicionar à sua lista de favoritos</span>
            </button>
          </li>
        ))}
      </BuildingsList>
      <footer>
        <div>
          <button type="button" onClick={handlePrev}>
            <FaArrowCircleLeft size={20} color="#131313" />
          </button>
          <button type="button" onClick={handleNext}>
            <FaArrowCircleRight size={20} color="#131313" />
          </button>
        </div>
      </footer>
    </Container>
  );
}
