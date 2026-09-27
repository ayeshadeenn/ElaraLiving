import Header from "./header";
import Footer from "./footer";

function SiteLayout({ children }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1280px] flex-col overflow-hidden bg-white">

      <Header />

      <main className="flex-1">
        {children}
      </main>

      <Footer />

    </div>
  );
}

export default SiteLayout;