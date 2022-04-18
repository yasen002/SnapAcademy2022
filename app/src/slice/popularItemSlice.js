import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Southwest Combo Plate",
    desc: "Freshly grilled beef and vege stixs with crispy buttered fries and rice",
    img: "https://i.imgur.com/OHIdzHC.jpeg",
  },
  {
    id: "2",
    title: "Southwest Combo Plate",
    desc: "Freshly grilled beef and vege stixs with crispy buttered fries and rice",
    img: "https://i.imgur.com/OHIdzHC.jpeg",
  },
  {
    id: "3",
    title: "Southwest Combo Plate",
    desc: "Freshly grilled beef and vege stixs with crispy buttered fries and rice",
    img: "https://i.imgur.com/OHIdzHC.jpeg",
  },
  {
    id: "4",
    title: "Southwest Combo Plate",
    desc: "Freshly grilled beef and vege stixs with crispy buttered fries and rice",
    img: "https://i.imgur.com/OHIdzHC.jpeg",
  },
  {
    id: "5",
    title: "Southwest Combo Plate",
    desc: "Freshly grilled beef and vege stixs with crispy buttered fries and rice",
    img: "https://i.imgur.com/OHIdzHC.jpeg",
  },
  {
    id: "6",
    title: "Southwest Combo Plate",
    desc: "Freshly grilled beef and vege stixs with crispy buttered fries and rice",
    img: "https://i.imgur.com/OHIdzHC.jpeg",
  },
];

export const popularItemSlice = createSlice({
  name: "popularItems",
  initialState,
  reducers: {},
});

export default popularItemSlice.reducer;
