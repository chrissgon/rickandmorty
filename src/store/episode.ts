import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
  filteredEpisodes: IEpisodes;
  page: number;
  pages: number;
  notFound: boolean;
}

const initialState = {
	episodes: [],
	filteredEpisodes: [],
	page: 1,
	pages: 100,
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

export const firstEpisodes = createAsyncThunk(
	"episode/firstEpisodes",
	async () => {
		return (
			await fetch(`https://rickandmortyapi.com/api/episode?page=1`)
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
		setEpisodePage(state: IState, action: PayloadAction<{ page: number }>) {
			state.page = action.payload.page;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getEpisodes.fulfilled, (state: IState, action) => {
			state.episodes = action.payload.results;
			state.pages = action.payload.info.pages;
		});
		builder.addCase(firstEpisodes.fulfilled, (state: IState, action) => {
			state.notFound = false;
			state.filteredEpisodes = action.payload.results;
		});
		builder.addCase(filterEpisodes.fulfilled, (state: IState, action) => {
			if (action.payload.error) {
				state.notFound = true;
				return;
			}
			state.notFound = false;
			state.filteredEpisodes = action.payload.results;
			window.location.href = "#episodes";
		});
	},
});

export const { setEpisodePage } = episodeSlice.actions;

export default episodeSlice.reducer;
