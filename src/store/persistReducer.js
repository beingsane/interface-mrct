import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'favorites',
      storage: sessionStorage,
    },
    reducers
  );

  return persistedReducer;
};
