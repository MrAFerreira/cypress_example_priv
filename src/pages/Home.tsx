import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

function Home() {
  return (
    <Box w={'full'}>
      <Hero />
      <Features />
      <Footer />
    </Box>
  );
}

export default Home;
