import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  image: "",
  images: [],
  loading: false,
  message: false,
  infoTitle: "",
  infoText: "",
  isError: false,
};

export const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.message = true;
      state.infoTitle = "Unsuccess";
      state.infoText = action.payload;
      state.isError = true;
    },
    setInfo: (state, action) => {
      state.message = true;
      state.infoTitle = "Success";
      state.infoText = action.payload;
      state.isError = false;
    },
    closeMessage: (state) => {
      state.message = false;
    },
  },
});

export const {
  setImage,
  setImages,
  setLoading,
  setError,
  setInfo,
  closeMessage,
} = MainSlice.actions;

export default MainSlice.reducer;
