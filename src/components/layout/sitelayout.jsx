import Header from "./header";

function SiteLayout({ children }) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1280px] overflow-hidden bg-white">

      <Header />

      <main>
        {children}
      </main>

    </div>
  );
}

export default SiteLayout;