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
      <main className="max-w-80 xl:max-w-5xl lg:max-w-4xl md:max-w-3xl sm:max-w-2xl mx-auto flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  </div>
);

export default BaseLayout;
