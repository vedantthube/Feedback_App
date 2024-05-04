import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import FeedbackList from './components/FeedbackList';
import Feedbackstats from './components/Feedbackstats';
import FeedbackForm from './components/FeedbackForm';
import About from './Page/About';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';
function App() {
  return (
    <FeedbackProvider>
    <BrowserRouter>
    <div className='main'>
    <Header />
    <div className="Container">
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={
          <>
          <FeedbackForm />
          <Feedbackstats />
          <FeedbackList />
          </>
        }/>
        <Route path='/post/*' element={<Post/>}/>
      </Routes>
      <AboutIconLink/>
      
    </div>
    </div>
    
    </BrowserRouter>
    </FeedbackProvider>
  );
}
export default App;