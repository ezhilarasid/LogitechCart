import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { store } from "./app/store";
import { theme } from "./theme/theme";
import CartPage from "./pages/CartPage";
import "./App.css";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CartPage />
      </ThemeProvider>
    </Provider>
  );
}
