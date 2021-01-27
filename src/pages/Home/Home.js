import './Home.scss';

function Home() {
  return (
    <>
      <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar">
          <div className="img bg-wrap text-center py-4">
            <div className="user-logo">
              <h3>Formation Flex Css</h3>
            </div>
          </div>
          <ul className="list-unstyled components mb-5">
            <li className="active">
              <a href="#">
                <span className="fa fa-home mr-3"></span> Home
              </a>
            </li>
          </ul>
        </nav>

        <div id="content" className="p-4 p-md-5 pt-5">
          <h2 className="mb-4">Page 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
