import { lazy, Suspense } from 'react';
import { Hero } from '../sections';

// Lazy load des sections qui ne sont pas immédiatement visibles
const About = lazy(() => import('../sections/About'));
const Gallery = lazy(() => import('../sections/Gallery'));

const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="min-h-screen" />}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Gallery />
      </Suspense>
    </>
  );
};

export default HomePage;
