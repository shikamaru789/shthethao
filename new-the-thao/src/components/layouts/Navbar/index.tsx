import Link from "next/link";
import NavbarMobile from "../NavbarMobile";
import { useEffect, useState } from "react";
import { CategoryItemProps } from "@/interface";
import { useRouter } from "next/router";

const Navbar = ({ listCate }: { listCate: any }) => {
  const router = useRouter();
  let slug = router.query.slug;

  const [activeToggle, setActiveToggle] = useState(false);
  useEffect(() => {
    const navbarMobile = document.getElementById("navbar-mobile");
    const buttonToggle = document.getElementById("icon-toggle-mobile-menu");
    const bars_1 = document.getElementById("icon-bars-1");
    const bars_2 = document.getElementById("icon-bars-2");
    const bars_3 = document.getElementById("icon-bars-3");

    const windowResize = window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setActiveToggle(false);
        if (bars_2 && bars_1 && bars_3 && navbarMobile) {
          bars_2.style.display = "block";
          navbarMobile.style.transform = "translateX(-100%)";
          bars_1.style.transform = "rotate(0deg) translateY(0px)";
          bars_3.style.transform = "rotate(0) translateY(0)";
        }
      }
    });

    if (bars_2 && bars_1 && bars_3 && navbarMobile) {
      if (activeToggle) {
        bars_2.style.display = "none";
        bars_1.style.transform = "rotate(45deg)";
        navbarMobile.style.transform = "translateX(0%)";
        bars_1.style.transform =
          "rotate(45deg) translateY(7px) translateX(-1px)";
        bars_3.style.transform = "rotate(-45deg) translateY(-7px)";
      } else {
        bars_2.style.display = "block";
        navbarMobile.style.transform = "translateX(-100%)";
        bars_1.style.transform = "rotate(0deg) translateY(0px)";
        bars_3.style.transform = "rotate(0) translateY(0)";
      }
    }

    return () => {
      //@ts-ignore
      window.removeEventListener("resize", windowResize);
    };
  }, [activeToggle]);
  return (
    <div className="page-navbar fixed w-full bg-white z-20">
      <NavbarMobile listCate={listCate} />
      <div className="navbar-options relative mx-auto">
        <Link href={"/"}>
          <div className="page-navbar-icon absolute mr-14 top-5 left-6">
            <img src="/icon/icon-home.png" />
          </div>
        </Link>
        <ul className="navbar-options-ul">
          <Link href={"/"}>
            <li>
              <span className={!slug &&  router.pathname !== "/the-thao/sea-games-32" ? "navbar-active py-2" : "navbar py-2"}>
                Trang chủ
              </span>

            </li>
          </Link>
          <Link href={"/the-thao/sea-games-32"}>
            <li>
              <span className={router.pathname === "/the-thao/sea-games-32" ? "navbar-active py-2" : "navbar py-2"}>
                Seagame 32
              </span>

            </li>
          </Link>

          {/* @ts-ignore */}
          {listCate?.map((item: CategoryItemProps) => {
            return (
              <Link href={`/${item.slug}`}>
                <li>
                  <span
                    className={
                      slug === item.slug ? "navbar-active py-2" : "navbar py-2"
                    }
                  >
                    {item.name}
                  </span>
                </li>
              </Link>
            );
          })}

        </ul>
        <div
          className="icon-toggle-mobile-menu cursor-pointer fixed right-3 z-20 top-7"
          id="icon-toggle-mobile-menu"
          onClick={() => setActiveToggle(!activeToggle)}
        >
          <div className="icon-bars bars-1" id="icon-bars-1"></div>
          <div className="icon-bars bars-2" id="icon-bars-2"></div>
          <div className="icon-bars bars-3" id="icon-bars-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
