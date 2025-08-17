import BannerImage from "../../src/assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col-reverse md:flex-row lg:flex-row gap-6 px-4 md:px-8 lg:px-16">
        {/* Text Section */}
        <div className="text-center md:text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn btn-accent mt-5">Get Started</button>
        </div>

        {/* Image Section */}
        <img
          src={BannerImage}
          className="w-72 sm:w-96 md:w-5/12 lg:w-6/12 rounded-lg shadow-2xl"
          alt="Books"
        />
      </div>
    </div>
  );
};

export default Banner;
