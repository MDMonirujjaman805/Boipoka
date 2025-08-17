import Footer from "./Footer";
import Navbar from "./Navbar";

const ErrorPage = () => {
  return (
    <div className="w-10/12 mx-auto grid place-items-center min-h-screen bg-slate-900 text-white">
      <div className="text-center">
        <h1 className="text-8xl mb-4">404</h1>
        <p className="text-2xl">😔 Oops! Page Not Found.</p>
      </div>
    </div>
  );
};

export default ErrorPage;

// justify-center align-middle
