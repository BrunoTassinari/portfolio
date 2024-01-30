import Header from '../Header';
import Intro from '../Intro';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';
import Footer from '../Footer';
import Experience from '../Experience';

const MainContent = () => (
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

export default MainContent;
