export const selectCartItems = (state) => state.cart.items;

export const selectCartSummary = (state) => {
  const selectedItems = state.cart.items.filter(i => i.selected);

  const subtotal = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discountedTotal = selectedItems.reduce(
    (sum, item) => sum + item.discountedTotal,
    0
  );

  const savings = subtotal - discountedTotal;

  const totalQuantity = selectedItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return {
    subtotal,
    discountedTotal,
    savings,
    totalQuantity,
  };
};

export const selectCartLoading = (state) => state.cart.loading;

export const selectCartItemCount = (state) =>
    state.cart.items.length;

export const selectCartTotalQuantity = (state) =>
    state.cart.items.reduce(
        (total, item) => total + item.quantity,
        0
    );

export const selectAllSelected = (state) =>
    state.cart.items.every(item => item.selected);

export const selectSomeSelected = (state) =>
    state.cart.items.some(item => item.selected);

export const selectSelectedItems = (state) =>
  state.cart.items.filter(item => item.selected);

export const selectCheckoutSummary = (state) => {
  const selectedItems = state.cart.items.filter(i => i.selected);

  const subtotal = selectedItems.reduce(
    (sum, item) => sum + item.total,
    0
  );

  const discountedTotal = selectedItems.reduce(
    (sum, item) => sum + item.discountedTotal,
    0
  );

  const totalQuantity = selectedItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return {
    items: selectedItems,
    subtotal,
    discountedTotal,
    savings: subtotal - discountedTotal,
    totalQuantity,
  };
};






