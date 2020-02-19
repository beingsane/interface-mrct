export function addToFavorites(building) {
  return {
    type: '@favorites/ADD',
    building,
  };
}

export function removeFromFavorites(id) {
  return {
    type: '@favorites/REMOVE',
    id,
  };
}
/*
export function addToFavoritesSuccess(building) {
  return {
    type: '@fav/ADD_SUCCESS',
    building,
  };
}
*/
