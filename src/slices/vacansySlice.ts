import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Vacancy, vacancies as mockVacancies } from "@/data/vacancies";

interface VacancyState {
  vacancies: Vacancy[];
  selectedVacancy: Vacancy | null;
  listLoading: boolean;
  detailLoading: boolean;
  error: string | null;
  bookmarkedIds: number[];
  emailShownIds: number[];
}

const initialState: VacancyState = {
  vacancies: [],
  selectedVacancy: null,
  listLoading: false,
  detailLoading: false,
  error: null,
  bookmarkedIds: typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('bookmarkedIds') || '[]')
    : [],
  emailShownIds: typeof window !== 'undefined'
    ? JSON.parse(sessionStorage.getItem('emailShownIds') || '[]')
    : [],
};

export const getVacancies = createAsyncThunk<Vacancy[], void, { rejectValue: string }>(
  "vacancies/getAll",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((r) => setTimeout(r, 500));
      return mockVacancies;
    } catch {
      return rejectWithValue("Failed to load vacancies");
    }
  }
);

export const getVacancyById = createAsyncThunk<Vacancy, number, { rejectValue: string }>(
  "vacancies/getById",
  async (id, { rejectWithValue }) => {
    try {
      await new Promise((r) => setTimeout(r, 300));
      const found = mockVacancies.find((v) => v.id === id);
      if (!found) return rejectWithValue("Vacancy not found");
      return found;
    } catch {
      return rejectWithValue("Failed to load vacancy detail");
    }
  }
);

export const toggleBookmark = createAsyncThunk<number, number>(
  "vacancies/toggleBookmark",
  async (id, { getState }) => {
    const state = getState() as { vacancies: VacancyState };
    const ids = new Set(state.vacancies.bookmarkedIds);
    if (ids.has(id)) ids.delete(id);
    else ids.add(id);
    const updated = Array.from(ids);
    localStorage.setItem('bookmarkedIds', JSON.stringify(updated));
    return id;
  }
);

const vacancySlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {
    clearSelectedVacancy(state) {
      state.selectedVacancy = null;
      state.error = null;
    },
    showEmail(state, action: PayloadAction<number>) {
      if (!state.emailShownIds.includes(action.payload)) {
        state.emailShownIds.push(action.payload);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('emailShownIds', JSON.stringify(state.emailShownIds));
        }
      }
    },
    hideEmail(state, action: PayloadAction<number>) {
      const index = state.emailShownIds.indexOf(action.payload);
      if (index !== -1) {
        state.emailShownIds.splice(index, 1);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('emailShownIds', JSON.stringify(state.emailShownIds));
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVacancies.pending, (state) => {
        state.listLoading = true;
        state.error = null;
      })
      .addCase(getVacancies.fulfilled, (state, action: PayloadAction<Vacancy[]>) => {
        state.listLoading = false;
        state.vacancies = action.payload;
      })
      .addCase(getVacancies.rejected, (state, action) => {
        state.listLoading = false;
        state.error = action.payload ?? "Unknown error";
      })
      .addCase(getVacancyById.pending, (state) => {
        state.detailLoading = true;
        state.error = null;
      })
      .addCase(getVacancyById.fulfilled, (state, action: PayloadAction<Vacancy>) => {
        state.detailLoading = false;
        state.selectedVacancy = action.payload;
      })
      .addCase(getVacancyById.rejected, (state, action) => {
        state.detailLoading = false;
        state.error = action.payload ?? "Unknown error";
      })
      .addCase(toggleBookmark.fulfilled, (state, action: PayloadAction<number>) => {
        const id = action.payload;
        const idx = state.bookmarkedIds.indexOf(id);
        if (idx >= 0) state.bookmarkedIds.splice(idx, 1);
        else state.bookmarkedIds.push(id);
      });
  },
});

export const { clearSelectedVacancy, showEmail, hideEmail } = vacancySlice.actions;
export default vacancySlice.reducer;