import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

import { addToFavoritesSuccess } from './actions';

function* addToFavorites({ id }) {
  const buildingExists = yield select(state =>
    state.favorite.find(b => b.id === id)
  );

  if (!buildingExists) {
    const response = yield call(api.get, `/buildings/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.min_price),
    };

    yield put(addToFavoritesSuccess(data));

    history.push('/favorites');
  }
}

export default all([takeLatest('@fav/ADD_REQUEST', addToFavorites)]);
