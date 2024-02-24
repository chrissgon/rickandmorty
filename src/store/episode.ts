import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IEpisode {
  id: string;
  name: string;
  episode: string;
  characters: string[];
  url: string;
}

export interface IEpisodes extends Array<IEpisode> {}

interface IState {
  episodes: IEpisodes;
  page: number;
}

const initialState = {
  episodes: [],
  page: 1,
} as IState;

export const getEpisodes = createAsyncThunk(
  "episode/getEpisodes",
  async (page: number) => {
    return (
      await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
    ).json();
  }
);

export const episodeSlice = createSlice({
  name: "episode",
  initialState,
  reducers: {
    nextEpisode(state: IState) {
      state.page = state.page + 1;
    },
    prevEpisode: (state: IState) => {
      state.page = state.page - 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEpisodes.fulfilled, (state: IState, action) => {
      state.episodes = action.payload.results;
    });
  },
});

export const { nextEpisode, prevEpisode } = episodeSlice.actions;

export default episodeSlice.reducer;
