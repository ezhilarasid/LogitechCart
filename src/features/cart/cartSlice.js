import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosInstance";

export const fetchCart = createAsyncThunk(
    "cart/fetchCart",
    async () => {
        const data = await api.get("/carts/18?select=products");
        return data.products;
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        initialItems: [],
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        removeItem(state, action) {
            state.items = state.items.filter(
                item => item.id !== action.payload
            );
        },
        updateQuantity(state, action) {
            const { id, delta } = action.payload;
            const item = state.items.find(i => i.id === id);
            if (!item) return;

            const qty = Math.max(1, item.quantity + delta);
            item.quantity = qty;
            item.total = item.price * qty;
            item.discountedTotal =
                item.total * (1 - item.discountPercentage / 100);
        },
        toggleItemSelection(state, action) {
            const item = state.items.find(i => i.id === action.payload);
            if (item) {
                item.selected = !item.selected;
            }
        },
        toggleSelectAll(state, action) {
            const selectAll = action.payload; 
            state.items.forEach(item => {
                item.selected = selectAll;
            });
        },
        clearSelectedItems(state) {
            state.items = state.items.filter(item => !item.selected);
        },
        resetCart(state) {
            state.items = state.initialItems.map(item => ({
                ...item,
                selected: true,
            }));
        },
        
removeOrderedItems(state) {
  state.items = state.items.filter(item => !item.selected);
}


    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.loading = false;
                const normalizedItems = action.payload.map(item => {
                    const qty = item.quantity ?? 1;
                    const total = item.price * qty;

                    return {
                        ...item,
                        quantity: qty,
                        total,
                        discountedTotal:
                            total * (1 - item.discountPercentage / 100),
                        selected: true, 
                    };
                });

                state.initialItems = normalizedItems;
                state.items = normalizedItems.map(i => ({ ...i }));
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});


export const { removeItem, resetCart, updateQuantity, toggleItemSelection, toggleSelectAll, clearSelectedItems, removeOrderedItems  } = cartSlice.actions;
export default cartSlice.reducer;
