import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ICharacter, IEpisode, ILocation } from ".";

export interface IState {
  characters: {
    [id: string]: ICharacter;
  };
  episodes: {
    [id: string]: IEpisode;
  };
  locations: {
    [id: string]: ILocation;
  };
}

const initialState = {
  characters: {},
  episodes: {},
  locations: {},
} as IState;

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    favoriteCharacter(state: IState, action: PayloadAction<ICharacter>) {
      if (state.characters[action.payload.id]) {
        delete state.characters[action.payload.id];
        return;
      }
      state.characters[action.payload.id] = action.payload;
    },
    favoriteEpisode(state: IState, action: PayloadAction<IEpisode>) {
      if (state.episodes[action.payload.id]) {
        delete state.episodes[action.payload.id];
        return;
      }
      state.episodes[action.payload.id] = action.payload;
    },
    favoriteLocation(state: IState, action: PayloadAction<ILocation>) {
      if (state.locations[action.payload.id]) {
        delete state.locations[action.payload.id];
        return;
      }
      state.locations[action.payload.id] = action.payload;
    },
  },
});

export function isFavoritedCharacter(
  state: IState,
  { id }: ICharacter
): boolean {
  return !!state.characters[id];
}

export function isFavoritedEpisode(state: IState, { id }: IEpisode): boolean {
  return !!state.episodes[id];
}

export function isFavoritedLocation(state: IState, { id }: ILocation): boolean {
  return !!state.locations[id];
}

export const { favoriteCharacter, favoriteEpisode, favoriteLocation } = favoriteSlice.actions;

export default favoriteSlice.reducer;
