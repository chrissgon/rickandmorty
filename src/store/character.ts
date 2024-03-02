import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ICharacterLocation {
  name: string;
  url: string;
}

export interface ICharacter {
  id: number;
  name: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  image: string;
  url: string;
  episode: string[];
  location: ICharacterLocation;
}

export interface ICharacters extends Array<ICharacter> {}

interface IState {
  characters: ICharacters;
  page: number;
  notFound: boolean;
}

const initialState = {
  characters: [],
  page: 1,
  notFound: false,
} as IState;

export const getCharacters = createAsyncThunk(
  "character/getCharacters",
  async (page: number) => {
    return (
      await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    ).json();
  }
);

export const filterCharacters = createAsyncThunk(
  "character/filterCharacters",
  async ({ name }: { name: string }) => {
    return (
      await fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
    ).json();
  }
);

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    nextCharacter(state: IState) {
      state.page = state.page + 1;
    },
    prevCharacter: (state: IState) => {
      state.page = state.page - 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.fulfilled, (state: IState, action) => {
      state.notFound = false;
      state.characters = action.payload.results;
    });
    builder.addCase(filterCharacters.fulfilled, (state: IState, action) => {
      if (action.payload.error) {
        state.notFound = true;
        return;
      }
      state.notFound = false;
      state.characters = action.payload.results;
      window.location.href = "#characters";
    });
  },
});

export const { nextCharacter, prevCharacter } = characterSlice.actions;

export default characterSlice.reducer;
