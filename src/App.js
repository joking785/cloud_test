import { Route, Routes } from 'react-router-dom';

function App() {
  <Routes>
    <Route path="*" element={<Home />} />
    <Route path="/books" element={<BookList />} />
  </Routes>;
}

export default App;
