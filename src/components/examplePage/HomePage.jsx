import React from "react";

export const HomePage = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <h1 className="site-title">Adam Kudłacik</h1>
          <ul className="display-f">
            <li className="ml-1 text-hover-secondary">
              <a href="#about">About Us</a>
            </li>
            <li className="ml-1 text-hover-secondary">
              <a href="#work">Our Work</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row justify-center">
          <div className="col-12-xs col-5-md">
            <h2>
              <div className="font-xxl">Black-belt</div>
              <div className="font-xxl text-secondary">Your website</div>
            </h2>
            <p className="text-gray mt-2 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a
              href="#work"
              className="btn-outlined-secondary text-secondary text-hover-white"
            >
              View Our Work
            </a>
          </div>
          <div className="col-12-xs col-5-md">
            <img src="/img/laptop.svg" alt="" />
          </div>
        </div>
      </div>

      <section id="about" className="bg-secondary-light-9 mt-5 pt-4 pb-4">
        <div className="container">
          <h2 className="mb-2">About me </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            tempora facere eos quia optio rem voluptatem ratione aliquam.
            Dolores ab reiciendis quis, rem sint consequatur. Deleniti, quae
            dolorem! Accusamus, quidem. Qui non, laboriosam libero suscipit
            officiis in recusandae enim rem ipsam aliquam, iure adipisci quas
            provident placeat totam quis minima accusantium fugiat? Quam sequi
            magnam modi deleniti blanditiis ab animi.
          </p>
          <p className="mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            dignissimos illum sapiente, dolorum, incidunt itaque quam aliquid
            hic ipsum neque aperiam est voluptatibus, quae at quis cum. Quam,
            necessitatibus iusto!
          </p>
        </div>
      </section>

      <section id="work" className="mt-5">
        <div className="container">
          <div className="row justify-center">
            <h2 className="mb-2">Some of Our Work</h2>
          </div>

          <div className="row gap-2">
            <div className="col-12-xs col-6-md col-3-lg">
              <div className="card p-0">
                <h3 className="card-title m-1">Mario Club</h3>
                <img src="/img/mario.png" alt="" />
                <p className="m-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam, hic!
                </p>
              </div>
            </div>
            <div className="col-12-xs col-6-md col-3-lg">
              <div className="card p-0">
                <h3 className="card-title m-1">Ninja Food</h3>
                <img src="/img/food.png" alt="" />
                <p className="m-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam, hic!
                </p>
              </div>
            </div>
            <div className="col-12-xs col-6-md col-3-lg">
              <div className="card p-0">
                <h3 className="card-title m-1">Just Add Marmite</h3>
                <img src="/img/marmite.png" alt="" />
                <p className="m-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam, hic!
                </p>
              </div>
            </div>
            <div className="col-12-xs col-6-md col-3-lg">
              <div className="card p-0">
                <h3 className="card-title m-1">Ninja Notes</h3>
                <img src="/img/notes.png" alt="" />
                <p className="m-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam, hic!
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-center mt-2">
            <button className="btn-secondary text-white font-md">View All</button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-light-7 pt-3 pb-3 mt-5">
        <div className="container">copyright 2021 Adam Kudłacik</div>
      </footer>
    </>
  );
};
