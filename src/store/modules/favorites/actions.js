export function addToFavoritesRequest(id) {
  return {
    type: '@fav/ADD_REQUEST',
    id,
  };
}

export function addToFavoritesSuccess(building) {
  return {
    type: '@fav/ADD_SUCCESS',
    building,
  };
}

export function removeFromFavorites(id) {
  return {
    type: '@fav/REMOVE',
    id,
  };
}
