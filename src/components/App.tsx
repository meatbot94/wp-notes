// react router
import { Routes, Route } from 'react-router-dom';

// styles
import '../styles/App.scss';

// components
import Menu from './Menu';
import Blog from './Blog';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
