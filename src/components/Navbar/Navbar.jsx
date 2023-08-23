import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("loginData"));

  const logOutHandler = () => {
    localStorage.removeItem("loginData");

    navigate("/login");
  }

  return (
    <>
      <nav className="bg-[#2c3531] pt-2 sticky top-0 h-19 overflow-hidden z-10">
        <section className="flex flex-col md:flex-row">
          <div className="w-1/3 text-3xl content-center text-white pl-12 py-1">
            <NavLink to="/">
              <span className="text-4xl text-sky-600">B</span>logApp
            </NavLink>
          </div>
          <div className="text-xl text-white py-1">
            <Link to="/" className="px-5">
              Created Post
            </Link>
            <Link to="/explore_post" className="px-5">
              Explore Post
            </Link>
            {userData.role === "admin" && (
              <Link to="/creat_post" className="px-5">
                Creat Post
              </Link>
            )}
            <button onClick={logOutHandler} className="px-5">
              Log out
            </button>
          </div>
        </section>
      </nav>
    </>
  );
}

export default Navbar;
