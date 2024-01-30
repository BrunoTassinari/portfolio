import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

const Home = () => (
  <>
    <Header />
    <main
      className="
    w-full
    flex
    flex-col
    items-center
    justify-center
  bg-light-primary
  text-light-text-primary
  dark:bg-dark-primary
  dark:text-dark-text-primary
  "
    >
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </main>
    <Footer />
  </>
);

export default Home;
