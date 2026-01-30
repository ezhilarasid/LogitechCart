# React Cart Application

A responsive shopping cart application built using **React**, **Redux Toolkit**, and **Material UI**.

## 🚀 Features
- Add / remove products from cart
- Quantity increase / decrease
- Select all / deselect items
- Partial checkout
- Order success page with countdown
- Responsive layout (mobile & desktop)
- Empty cart state

---

## 🛠️ Tech Stack
- React
- Redux Toolkit
- Material UI (MUI)
- JavaScript
- CSS Grid / Flexbox

---

## 📦 Prerequisites
Make sure you have the following installed:

- **Node.js** (v16 or later)
- **npm** or **yarn**

Check versions:
```bash
node -v
npm -v

```
---

## ▶️ How to Run the Project Locally

1️⃣ Clone the repository
git clone https://github.com/ezhilarasid/LogitechCart.git

2️⃣ Navigate to the project folder
cd react-cart-app

3️⃣ Install dependencies
npm install

4️⃣ Start the development server
npm start

5️⃣ Open in browser
http://localhost:5173


---

## 📁 Project Structure

```text
src/
├── api/
│   └── axiosInstance.js        # Axios configuration & API setup
│
├── app/
│   └── store.js                # Redux store configuration
│
├── assets/                     # Static assets (images, icons, etc.)
│
├── components/
│   ├── Cart/
│   │   ├── CartContent.jsx     # Main cart content layout
│   │   ├── CartItem.jsx        # Individual cart item card
│   │   ├── CartSummary.jsx     # Cart totals and summary
│   │   └── OrderSummary.jsx    # Order summary details
│   │
│   ├── Checkout/
│   │   ├── AddressSelector.jsx # Address selection component
│   │   ├── CheckoutDialog.jsx  # Checkout modal dialog
│   │   ├── OrderSuccess.jsx    # Order success screen
│   │   └── PaymentMethodSelector.jsx # Payment method selection
│   │
│   └── Common/
│       └── ImagePreviewModal.jsx # Reusable image preview modal
│
├── features/
│   └── cart/
│       ├── cartSelectors.js    # Cart-related selectors
│       └── cartSlice.js        # Redux Toolkit slice for cart state
│
├── layout/
│   ├── Header.jsx              # Application header
│   ├── Footer.jsx              # Application footer
│   └── PageLayout.jsx          # Main layout wrapper
│
├── pages/
│   └── CartPage.jsx            # Cart page container
│
├── theme/
│   └── theme.js                # MUI theme configuration
│
├── App.jsx                     # Root application component
├── main.jsx                    # Application entry point
├── App.css                     # Global app styles
└── index.css                   # Base CSS styles
```

### 🏗️ Architecture Overview
- **Component-based structure** for scalability
- **Redux Toolkit** used for global cart state management
- **Feature-based foldering** (`features/cart`) for business logic
- **Reusable UI components** grouped under `components/Common`
- **Layout separation** for Header, Footer, and Page wrapper
- **MUI Theme** centralized for consistent styling

## 📸 Screenshots
**Desktop Version**

 **Cart Page**
<img width="958" height="472" alt="image" src="https://github.com/user-attachments/assets/75439c3d-565e-474e-a86c-020ab6153e7d" />

**Checkout Page**
<img width="955" height="468" alt="image" src="https://github.com/user-attachments/assets/a8446cdf-49cd-4b0d-88ac-8ab74f08bbe9" />

**Success Page**
<img width="949" height="467" alt="image" src="https://github.com/user-attachments/assets/8ea1a68a-94aa-4210-9b02-b1089f737f67" />

**For Smaller Screens (<800 Width)**

**Cart Page**

<img width="398" height="421" alt="image" src="https://github.com/user-attachments/assets/4452495d-c98b-4021-b8fc-294478e3db3c" />

**Checkout Page**

<img width="396" height="412" alt="image" src="https://github.com/user-attachments/assets/8622eede-cc5d-41a8-bc2d-16b331a2c067" />

**Success Page**

<img width="397" height="413" alt="image" src="https://github.com/user-attachments/assets/0610ea2d-54be-4a9b-a301-168c4eb2f7c3" />



## 👤 Author
Ezhilarasi Durai
