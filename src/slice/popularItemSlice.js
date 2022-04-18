import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Southwest Combo Plate",
    desc: "Freshly grilled beef and vege stixs with extra crispy buttered fries and white or brown rice on the side.",
    img: "https://i.imgur.com/OHIdzHC.jpeg",
  },
  {
    id: "2",
    title: "Assorted Grilled Vege",
    desc: " assortment of colorful veggies bathed in a flavorful garlic and herb marinade, then cooked to perfection on the grill.",
    img: "https://i.imgur.com/ur1I9VK.jpg",
  },
  {
    id: "3",
    title: "Shrimp Teriyaki Combo",
    desc: "20 large piece of grilled shrimp with our special house teriyaki sauce on top; with salmon salad.",
    img: "https://i.imgur.com/hJOEiNU.jpg",
  },
  {
    id: "4",
    title: "Shrimp Teriyaki Combo",
    desc: "20 large piece of grilled shrimp with our special house teriyaki sauce on top; with salmon salad.",
    img: "https://i.imgur.com/hJOEiNU.jpg",
  },
  {
    id: "5",
    title: "Assorted Grilled Vege",
    desc: " assortment of colorful veggies bathed in a flavorful garlic and herb marinade, then cooked to perfection on the grill.",
    img: "https://i.imgur.com/ur1I9VK.jpg",
  },
  {
    id: "6",
    title: "Southwest Combo Plate",
    desc: "Freshly grilled beef and vege stixs with crispy buttered fries and rice on the side.",
    img: "https://i.imgur.com/OHIdzHC.jpeg",
  },
];

export const popularItemSlice = createSlice({
  name: "popularItems",
  initialState,
  reducers: {},
});

export default popularItemSlice.reducer;
