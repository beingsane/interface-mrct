import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

import api from '~/services/api';

import * as FavActions from '~/store/modules/favorites/actions';

import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Footer,
} from './styles';

export default function Home() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const favoriteSelect = useSelector(state => state.favorite);

  useEffect(() => {
    async function loadBuildings() {
      const response = await api.get('buildings', {
        params: {
          page,
        },
      });

      const buildings = response.data.buildings.map(building => {
        const checkBuilding = favoriteSelect.findIndex(
          favorite => favorite.id === building.id
        );
        if (checkBuilding >= 0) {
          return {
            ...building,
            favorite: true,
          };
        }
        return {
          ...building,
          favorite: false,
        };
      });
      setData(buildings);
    }

    loadBuildings();
  }, [favoriteSelect, page]);

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
        {data.map(building => (
          <Card key={building.id} onClick={() => handleAddFavorite(building)}>
            <img src={building.default_image['520x280']} alt={building.name} />
            <CardContent>
              <div>
                <span>{building.name}</span>
              </div>
              <span>{building.address.city}</span>
              <p>{building.address.area}</p>
            </CardContent>
            <CardActions>
              <button type="button">
                <div>
                  {building.favorite ? (
                    <MdFavorite size={18} color="#fff" />
                  ) : (
                    <MdFavoriteBorder size={18} color="#fff" />
                  )}
                </div>
                <span>Adicionar à sua lista de favoritos</span>
              </button>
            </CardActions>
          </Card>
        ))}
      </Grid>
      <Footer>
        <button type="button" onClick={handlePrev}>
          <FaArrowCircleLeft size={35} color="#131313" />
        </button>
        <button type="button" onClick={handleNext}>
          <FaArrowCircleRight size={35} color="#131313" />
        </button>
      </Footer>
    </Container>
  );
}
