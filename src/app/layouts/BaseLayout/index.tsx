import Footer from '@/app/pages/Home/components/Footer';
import Header from '@/app/pages/Home/components/Header';

const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <div className="h-screen w-screen">
    <div id="modal-root" />
    <div>
      <Header />
      <main className="w-full flex flex-col items-center justify-center first:bg-white text-darkBlue dark:bg-gray dark:text-dark-text-primar">
        {children}
      </main>
      <Footer />
    </div>
  </div>
);

export default BaseLayout;
