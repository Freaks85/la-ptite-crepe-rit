import { lazy, Suspense } from 'react';

const Menu = lazy(() => import('../sections/Menu'));

const MenuPage = () => {
  return (
    <div className="pt-20">
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-sage border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <Menu />
      </Suspense>
    </div>
  );
};

export default MenuPage;
