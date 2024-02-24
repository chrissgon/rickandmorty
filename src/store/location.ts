import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
}

export interface ILocations extends Array<ILocation> {}

interface IState {
  locations: ILocations;
  page: number;
}

const initialState = {
  locations: [],
  page: 1,
} as IState;

export const getLocations = createAsyncThunk(
  "location/getLocations",
  async (page: number) => {
    return (
      await fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
    ).json();
  }
);

export const filterLocations = createAsyncThunk(
  "location/filterLocations",
  async ({ name }: { name: string }) => {
    return (
      await fetch(`https://rickandmortyapi.com/api/location?name=${name}`)
    ).json();
  }
);

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    nextLocation(state: IState) {
      state.page = state.page + 1;
    },
    prevLocation: (state: IState) => {
      state.page = state.page - 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLocations.fulfilled, (state: IState, action) => {
      state.locations = action.payload.results;
    });
  },
});

export const { nextLocation, prevLocation } = locationSlice.actions;

export default locationSlice.reducer;
