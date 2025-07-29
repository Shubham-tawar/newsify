
import './App.css';
import Navigation from './components/Navigation';
import NewsComponent from './components/NewsComponent';
import LoadingBar from "react-top-loading-bar";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
    <Router>
    <Navigation />
    <LoadingBar
      color="#f11946"
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
    <Routes>
      <Route path="/" element={<NewsComponent setProgress = {setProgress}  key="general" pageSize={21} category="general" />} />
      <Route path="/science" element={<NewsComponent setProgress = {setProgress}  key="science" pageSize={21} category="science" />} />
      <Route path="/business" element={<NewsComponent setProgress = {setProgress}  key="business" pageSize={21} category="business" />} />
      <Route path="/sports" element={<NewsComponent setProgress = {setProgress}  key="sports" pageSize={21} category="sports" />} />
      <Route path="/technology" element={<NewsComponent setProgress = {setProgress}  key="technology" pageSize={21} category="technology" />} />
      <Route path="/entertainment" element={<NewsComponent setProgress = {setProgress}  key="entertainment" pageSize={21} category="entertainment" />} />
      <Route path="/health" element={<NewsComponent setProgress = {setProgress}  key="health" pageSize={21} category="health" />} />
    </Routes>
    
    </Router>
    </>    
  );
}

export default App;
