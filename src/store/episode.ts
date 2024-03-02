import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IEpisode {
  id: number;
  name: string;
  episode: string;
  characters: string[];
  url: string;
}

export interface IEpisodes extends Array<IEpisode> {}

interface IState {
  episodes: IEpisodes;
  page: number;
  notFound: boolean;
}

const initialState = {
  episodes: [],
  page: 1,
  notFound: false,
} as IState;

export const getEpisodes = createAsyncThunk(
  "episode/getEpisodes",
  async (page: number) => {
    return (
      await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
    ).json();
  }
);

export const filterEpisodes = createAsyncThunk(
  "episode/filterEpisodes",
  async ({ name }: { name: string }) => {
    console.log(name);
    return (
      await fetch(`https://rickandmortyapi.com/api/episode?name=${name}`)
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
      state.notFound = false;
      state.episodes = action.payload.results;
    });
    builder.addCase(filterEpisodes.fulfilled, (state: IState, action) => {
      if (action.payload.error) {
        state.notFound = true;
        return;
      }
      state.notFound = false;
      state.episodes = action.payload.results;
      window.location.href = "#episodes";
    });
  },
});

export const { nextEpisode, prevEpisode } = episodeSlice.actions;

export default episodeSlice.reducer;
