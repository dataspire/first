import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";



const Header: FC = () => {
    return(
        
        <>
            <header className="page-header">
        <div className="header-top bg-grey-dark-one">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md">
                <ul className="header-top-nav list-inline justify-content-center justify-content-md-start">
                  <li className="current-date">dateFormat</li>
                  <li>
                    <Link href="/">
                      Advertisement
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <>About</>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <>Contact</>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-auto">
                <ul className="ml-auto social-share header-top__social-share">
                  <li>
                    <a href="">
                      <i className="" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar bg-white">
          <div className="container">
            <div className="navbar-inner">
              <div className="brand-logo-container">
                <Link href="/">
                  <>
                    <Image
                      src="/images/logo-black.svg"
                      alt="brand-logo"
                      width={102}
                      height={34}
                    />
                  </>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

        </>
    )
}

export default Header;