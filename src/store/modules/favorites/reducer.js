import produce from 'immer';
import history from '../../../services/history';

export default function favorites(state = [], action) {
  switch (action.type) {
    case '@favorites/ADD':
      return produce(state, draft => {
        const buildingIndex = draft.findIndex(b => b.id === action.building.id);

        if (buildingIndex >= 0) {
          draft[buildingIndex].amount += 1;
        } else {
          draft.push({
            ...action.building,
          });
        }
        history.push('/favorites');
      });
    case '@favorites/REMOVE':
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
