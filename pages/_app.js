import "../styles/tailwind.css";
import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="text-gray-800">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
