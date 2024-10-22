const Navbar = () => {
    return (
      <>
      <nav className="flex justify-between items-center px-10 py-6 border-[#1e1e1e] border-b-[1px]">
          <div>
              <p className="text-2xl font-normal font-italiana border-[#1e1e1e]">mind Mosaic</p>
          </div>
          <ul className="navLinks text-base flex gap-5 font-monda border-[#1e1e1e]">
              <li>HOME</li>
              <li>BLOG</li>
              <li>CONTACT</li>
          </ul>
      </nav>
      </>
    )
  }
  
  export default Navbar;
  