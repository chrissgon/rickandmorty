import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ILocation {
  id: string;
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
  pages: number;
  notFound: boolean;
}

const initialState = {
  locations: [],
  page: 1,
  pages: 100,
  notFound: false,
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
    setLocationPage(state: IState, action: PayloadAction<{ page: number }>) {
      state.page = action.payload.page;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLocations.fulfilled, (state: IState, action) => {
      state.notFound = false;
      state.locations = action.payload.results;
      state.pages = action.payload.info.pages;
    });
    builder.addCase(filterLocations.fulfilled, (state: IState, action) => {
      if (action.payload.error) {
        state.notFound = true;
        return;
      }
      state.notFound = false;
      state.locations = action.payload.results;
      window.location.href = "#locations";
    });
  },
});

export const { setLocationPage } = locationSlice.actions;

export default locationSlice.reducer;
