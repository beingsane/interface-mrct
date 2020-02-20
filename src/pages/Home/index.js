import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { Grid, Card } from '@material-ui/core/Grid';
import { MdFavorite } from 'react-icons/md';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

import api from '../../services/api';

import * as FavActions from '../../store/modules/favorites/actions';

import { Container, Grid, Card, CardContent, CardActions } from './styles';

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
      <Grid>
        {data.buildings.map(building => (
          <Card>
            <img src={building.default_image['520x280']} alt={building.name} />
            <CardContent>
              <div>
                <span>{building.name}</span>
              </div>
              <span>{building.address.city}</span>
              <p>{building.address.area}</p>
            </CardContent>
            <CardActions>
              <button type="button" onClick={() => handleAddFavorite(building)}>
                <div>
                  <MdFavorite size={16} color="#fff" />
                </div>
                <span>Adicionar à sua lista de favoritos</span>
              </button>
            </CardActions>
          </Card>
        ))}
      </Grid>
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
