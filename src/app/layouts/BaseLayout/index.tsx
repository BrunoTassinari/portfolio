import Header from '@components/Header';
import Footer from '@components/Footer';

const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <div className="h-screen w-screen">
    <div
      id="modal-root"
      className="first:bg-white text-darkBlue dark:bg-gray dark:text-white"
    >
      <Header />
      <main className="max-w-80 lg:max-w-5xl mx-auto flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  </div>
);

export default BaseLayout;
