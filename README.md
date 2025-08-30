# 🍓 Berries Pokédex

A simple React application built for an interview assignment.  
The app displays Pokémon berries, allows filtering by firmness, searching by name, and includes some bonus features.

---

## 🚀 Features

- **Fetch berries from the PokéAPI**
- **Firmness filter** – interactive vertical slider with categories and counts
- **Search by name** – filter berries by typing in the search field
- **Debounce mechanism** – search runs after 1 second (as requested in assignment)
- **Custom hook** – `useDebounce` extracted into its own file
- **Error handling & loading states** – spinner and error message if API fails
- **Empty state** – message when no berries match filters
- **Fallback images** – default image when berry sprite is missing
- **Responsive UI** – flex-based layout, slider on the left and results on the right

---

## 🛠️ Tech Stack

- **React** (with hooks)
- **Material-UI (MUI)** – for Slider & UI components
- **PokéAPI** – data source
- **Custom Hooks** (`useDebounce`)
- **CSS** (spinner, styling)

---

## ▶️ Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/ariellunen/Poke-Berries.git
   cd Poke-Berries
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm start
   ```
