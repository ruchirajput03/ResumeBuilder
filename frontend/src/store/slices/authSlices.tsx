import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios, { AxiosError } from 'axios';

// Interfaces
export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  resume?: string;
  [key: string]: string | undefined;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  message: string | null;
}



interface ErrorResponse {
  message: string;
  data?: {
    message: string;
  };
}

// Initial state
const initialState: AuthState = {
  user: null,
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
  message: null,
};

// Get API URL - use environment variable or fallback
const getApiUrl = () => {
  if (typeof window !== 'undefined') {
    return process.env.API_URL || 'http://localhost:8000/api/';
  }
  return process.env.API_URL || 'http://localhost:8000/api/';
};

// Async thunks
export const registerUser = createAsyncThunk<
  { user: User; token: string },
  Record<string, string>,
  { rejectValue: string }
>('auth/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${getApiUrl()}auth/register`, userData, {
      withCredentials: true,
    });

    // Handle the response structure (assuming similar to login)
    const user = response.data.data || response.data.user;
    const token = response.data.token || 'dummy-token';

    // Store token in localStorage if received
    if (token) {
      localStorage.setItem('token', token);
    }

    return {
      user: user,
      token: token
    };
  } catch (error) {
    const err = error as AxiosError<ErrorResponse>;
    return rejectWithValue(err.response?.data?.message || 'Registration failed');
  }
});

export const loginUser = createAsyncThunk<
  { user: User; token: string },
  Record<string, string>,
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${getApiUrl()}auth/login`, credentials, {
      withCredentials: true,
    });
    
    // Handle the response structure from your backend
    const userData = response.data.data; // User data is in response.data.data
    const token = response.data.token || 'dummy-token'; // Use token if provided, or dummy token
    
    // Store token in localStorage if received
    if (token) {
      localStorage.setItem('token', token);
    }

    // Return in the format expected by Redux
    return {
      user: userData,
      token: token
    };
  } catch (error) {
    const err = error as AxiosError<ErrorResponse>;
    return rejectWithValue(err.response?.data?.message || 'Login failed');
  }
});

export const fetchUser = createAsyncThunk<
  { user: User },
  void,
  { rejectValue: string }
>('auth/fetchUser', async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${getApiUrl()}auth/`, {
      withCredentials: true,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    
    // Handle the response structure
    const userData = response.data.data || response.data.user || response.data;
    
    return { user: userData };
  } catch (error) {
    const err = error as AxiosError<ErrorResponse>;
    return rejectWithValue(err.response?.data?.message || 'Failed to get profile');
  }
});

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      state.message = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
      }
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', action.payload.token);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.message = 'Registration successful';
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Registration failed';
        state.isAuthenticated = false;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.message = 'Login successful';
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Login failed';
        state.isAuthenticated = false;
      })

      // Get Profile
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to get profile';
        state.isAuthenticated = false;
      })
  },
});

export const { clearAuth, clearError, clearMessage, setCredentials } = authSlice.actions;

// Selectors
export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectAuthLoading = (state: RootState) => state.auth.isLoading;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selectUserRole = (state: RootState) => state.auth.user?.role;

export default authSlice.reducer;