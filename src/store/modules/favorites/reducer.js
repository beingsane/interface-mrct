import produce from 'immer';

export default function favorite(state = [], action) {
  switch (action.type) {
    case '@fav/ADD_SUCCESS':
      return produce(state, draft => {
        const { building } = action;

        draft.push(building);
      });
    case '@fav/REMOVE':
      return produce(state, draft => {
        const buildingIndex = draft.findIndex(b => b.id === action.id);

        if (buildingIndex >= 0) {
          draft.splice(buildingIndex, 1);
        }
      });
    default:
      return state;
  }
}
