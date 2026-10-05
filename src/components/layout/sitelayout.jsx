import Header from "./header";
import Footer from "./footer";

function SiteLayout({ children }) {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-white">

      <Header />

      <main className="flex-1">
        {children}
      </main>

      <Footer />

    </div>
  );
}

export default SiteLayout;