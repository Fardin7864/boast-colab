import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
