import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import ComingSoon from './sections/ComingSoon';
import FirstVideo from './sections/FirstVideo';
import Jason from './section/Jason';
import SecondVideo from './section/SecondVideo';
import PostCard from './section/PostCard';
import Lucia from './section/Lucia';
import Final from './section/Final';
import Outro from './section/Outro';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ComingSoon />
      <FirstVideo />
      <Jason/>
      <SecondVideo/>
      <Lucia/>
      <PostCard/>
      <Final />
      <Outro/>
    </main>
  )
}

export default App;