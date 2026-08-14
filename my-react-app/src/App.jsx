
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import Post from './components/Post';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
                