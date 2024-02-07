import Header from '@components/Header';
import Footer from '@components/Footer';

const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <div className="h-screen w-screen">
    <div id="modal-root" />
    <div>
      <Header />
      <main className="w-full flex flex-col items-center justify-center first:bg-white text-darkBlue dark:bg-gray dark:text-white">
        {children}
      </main>
      <Footer />
    </div>
  </div>
);

export default BaseLayout;
