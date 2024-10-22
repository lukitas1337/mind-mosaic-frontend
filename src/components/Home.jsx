const Home = () => {
    return (
      <>
        <section className="homeContainer flex flex-col justify-center items-center text-center">
            <div className="mt-24 mb-14">
                <h1 className="text-4xl font-italiana">MY BLOG</h1>
                <p className="text-md font-italiana">
                    A journey through thoughts, stories, and the art of living authentically.
                </p>
          </div>
          <img
            className="max-w-[832px] max-h-[546px] object-cover"
            src="./public/home-image.jpeg"
            alt="handwritten notebook on a table"
          />
        </section>
      </>
    );
  }
  
  export default Home;