import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Header.scss";
import lifeinsu from "../../logo.png"

import { IoMdMenu } from "react-icons/io";
import { useSidebarContext } from '../../context/sidebarContext';
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  const { openSidebar } = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  return (
    <>

      <nav className={` bg-orange flex align-center ${scrolled ? 'scrolled' : ""}`}>

        <div className='container w-100'>

          <div className='navbar-content text-white'>
            <div className='brand-and-toggler flex align-center justify-between'>
              <Link to="/" className='navbar-brand fw-3 fs-22 flex align-center'>
                <img src={logo} alt="logo" class="logo1" />
              </Link>

              <div className='navbar-btns flex align-center'>
                <button type="button" className='navbar-show-btn text-white' onClick={() => openSidebar()}>
                  <IoMdMenu size={27} />
                </button>

              </div>
            </div>
          </div>
        </div>
      </nav >
      <section>
        <section className="container mt-5" id="about">
          <div className='row'>
            <h1 className="text-center text-danger p-2 rounded-5 mt-5 display-4">
              𝔸𝕓𝕠𝕦𝕥
            </h1>
          </div>
          <div>
            <div
              className=" bg-danger-subtle rounded-3"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="row mt-5 justify-content-evenly">
                <div className="col-md-5 ">
                  <div className="justify-content-center d-flex">
                    <img
                      src={lifeinsu}
                      className="aboutimg p-5 img-fluid "
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
                <div className="col-md-6  d-flex  align-items-center">
                  <div className="" data-aos="fade-left" data-aos-duration="1000">
                    <h3 className="text-center">𝙱𝚁𝙸𝙴𝙵 𝙷𝙸𝚂𝚃𝙾𝚁𝚈 𝙾𝙵 𝚃𝙷𝙴 𝙲𝙾𝙼𝙿𝙰𝙽𝚈</h3>
                    <p className=" p-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia repellendus officiis, optio tenetur veritatis aliquam
                      qui est quidem! Repellat ex fuga provident itaque inventore,
                      dicta nam repellendus aspernatur iure labore? Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Mollitia
                      repellendus officiis, optio tenetur veritatis aliquam qui est
                      quidem! Repellat ex fuga provident itaque inventore, dicta nam
                      repellendus aspernatur iure labore?
                    </p>
                    <p className=" p-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia repellendus officiis, optio tenetur veritatis aliquam
                      qui est quidem! Repellat ex fuga provident itaque inventore,
                      dicta nam repellendus aspernatur iure labore? Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Mollitia
                      repellendus officiis, optio tenetur veritatis aliquam qui est
                      quidem! Repellat ex fuga provident itaque inventore, dicta nam
                      repellendus aspernatur iure labore?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </section>
    </>
  )
}

export default Navbar