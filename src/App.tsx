import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';
import Header from './components/Header';
import { ListPage } from './pages/ListPage';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <ListPage />
            </ErrorBoundary>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
