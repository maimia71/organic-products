import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Presented from './components/Presented/Presented';
import Welcome from './components/Welcome/Welcome';
import Testimonial from './components/Testimonial/Testimonial';
import Blog from  './components/Blog/Blog';



function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Welcome */}
      <Welcome />

      {/* Presented */}
      <Presented />

      {/* Testimonial */}
      <Testimonial />

      {/* Blog */}
      <Blog />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
