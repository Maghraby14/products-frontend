# 🛍️ Product Store – Frontend

This is the **frontend** for the Product Store application built with **React**, **Vite**, and **TypeScript**.  
It displays products, allows filtering by category, shows stock availability, and supports responsive design for all devices.

---

## 🚀 Tech Stack

- React 18
- Vite
- TypeScript
- Axios
- React Router
- Tailwind CSS / CSS Modules

---

## 🏗️ Layout Approach

### Component-Based Architecture
src/
- App.tsx include all logic for the application
- Each UI block is a reusable component.
- `ProductCard` handles product image, name, price, category, quantity, and stock state.
- Navbar includes search and category filters.

---

## 📱 Responsive Design Considerations

- **Mobile First**: single-column layout on mobile devices.
- **Breakpoints**:
| Width | Layout |
|-------|--------|
| 0–480px | Single column |
| 480–768px | 2 columns |
| ≥1024px | 3–4 columns |
- Grid layout uses `auto-fit` for dynamic columns.
- Buttons expand to full width on mobile.
- Images use `object-fit: cover` for consistent display.
- Navbar collapses on smaller screens.

---

## ⚙️ How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/Maghraby14/product-frontend.git
cd product-frontend
```
2. install dependencies
   ```bash
   npm install
   ```
3. start development server
```bash
npm run dev
```

