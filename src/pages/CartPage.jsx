import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../features/cart/cartSlice";
import PageLayout from "../layout/PageLayout";
import CartContent from "../components/Cart/CartContent";
import { toggleSelectAll } from "../features/cart/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);

  useEffect(() => {
    if (items.length > 0) {
      dispatch(toggleSelectAll(true));
    }
  }, [dispatch, items.length]);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <PageLayout>
      <CartContent />
    </PageLayout>
  );
}
