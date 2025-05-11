import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Vacancy {
  id?: number;
  title: string;
  description: string;
  salary: string;
  location: string;
  companyname: string;
}

interface VacancyState {
  vacancies: Vacancy[];
  selectedVacancy: Vacancy | null;
  listLoading: boolean;
  detailLoading: boolean;
  error: string | null;
}

const initialState: VacancyState = {
  vacancies: [],
  selectedVacancy: null,
  listLoading: false,
  detailLoading: false,
  error: null,
};

export const getVacancies = createAsyncThunk("vacancies/getAll", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("http://localhost:3000/api/vacancies");
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Something went wrong");
  }
});

export const getVacancyById = createAsyncThunk(
  "vacancies/getById",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/vacancies/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const createVacancy = createAsyncThunk("vacancies/create", async (vacancy: Vacancy, { rejectWithValue }) => {
  try {
    const response = await axios.post("http://localhost:3000/api/vacancies", vacancy);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Something went wrong");
  }
});

const vacancySlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {
    clearSelectedVacancy: (state) => {
      state.selectedVacancy = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Vacancy
      .addCase(createVacancy.pending, (state) => {
        state.listLoading = true;
        state.error = null;
      })
      .addCase(createVacancy.fulfilled, (state, action: PayloadAction<Vacancy>) => {
        state.listLoading = false;
        state.vacancies.push(action.payload);
      })
      .addCase(createVacancy.rejected, (state, action) => {
        state.listLoading = false;
        state.error = action.payload as string;
      })

      // Get All Vacancies
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
        state.error = action.payload as string;
      });

      // Get Vacancy Detail
    builder.addCase(getVacancyById.pending, (state) => {
      state.detailLoading = true;
      state.error = null;
    });
    builder.addCase(getVacancyById.fulfilled, (state, action: PayloadAction<Vacancy>) => {
      state.detailLoading = false;
      state.selectedVacancy = action.payload;
    });
    builder.addCase(getVacancyById.rejected, (state, action) => {
      state.detailLoading = false;
      state.error = action.payload as string;
    });
  }
});

export const { clearSelectedVacancy } = vacancySlice.actions;
export default vacancySlice.reducer;