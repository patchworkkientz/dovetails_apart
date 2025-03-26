import React from "react";
import Image from 'next/image'
import Link from "next/link";

export default function Header() {
  return (
    <>
    <div data-animation="over-right" data-easing2="ease"
        data-easing="ease" data-collapse="medium" data-w-id="c8a1bbf3-d315-6166-47e3-29fb659512ca" role="banner"
        data-no-scroll="1" data-duration="400" data-doc-height="1"
        className="navbar-no-shadow-container-2 dark-on-light w-nav">
        <div className="container-regular-2 floating-logo-container">
            <Link href="/"
                className="link-block-4 w-inline-block">
                <Image width={240} height={240} loading="lazy"
                    src="66bc6da8fe284e469308900a_icon_outline.svg" alt=""
                    className="floating-logo homepage"/>
            </Link>
            <nav role="navigation" className="nav-menu-wrapper-2 dark-on-light w-nav-menu">
                <Link
                    href="/" className="navbar-brand menulink w-nav-brand">
                      <Image loading="lazy"
                        src="66bc6da8fe284e469308900a_icon_outline.svg"
                        alt="Post author avatar" className="menu-icon" height={240} width={240}/>
                </Link>
                <ul role="list" className="nav-menu-2 w-list-unstyled">
                    <li className="nav-list"><Link
                            href="/"
                            target="_blank" className="nav-link-3 clear light-on-dark">PRIMITIVES&nbsp;&&nbsp;PROTOCOLS</Link></li>
                    <li className="nav-list"><Link href="/"
                            className="nav-link-3 clear light-on-dark">COMPOSABILITY</Link></li>
                    <li className="nav-list hidden"><Link href="/"
                            className="nav-link-3 hidden">about</Link></li>
                    <li className="nav-list"><Link href="" aria-current="page"
                            className="nav-link-3 clear light-on-dark w--current">ASSETIZATION</Link></li>
                </ul>
            </nav>
        </div>
        <div className="container-regular-2">
            <div className="navbar-wrapper-2">
                <Link href="/" className="">
                {/* navbar-brand w-nav-brand */}
                    <Image
                        width="240" height="0" loading="lazy" alt=""
                        src="/Dovetails_APART.png"
                        className="text-logo home-text-logo"
                        style={{ height: 'auto', paddingLeft: '30px', paddingTop: '17px' }}/>
                </Link>
                <div className="menu-button w-nav-button"  aria-label="menu" role="button"
                  aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
                    <Image
                        loading="lazy" src="/66bc6da8fe284e469308900f_icon open.svg" alt=""
                        className="icon-2 open"
                        width="100" height="100"
                        style={{ height: 'auto' }}
                    />
                    <Image loading="lazy"
                        src="/66bc6da8fe284e4693089011_icon close.svg" alt=""
                        className="icon-2 close"
                        width="100" height="0"
                        style={{ height: 'auto' }}
                    />
                </div>
            </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
    </div>
    </>
  );
}