import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ArrowRight from "@common/icons/ArrowRight";
import Call from "@common/icons/Call";
import Close from "@common/icons/Close";
import HamburgerIcon from "@common/icons/HamburgerIcon";
import { Script, Dynamic } from "streak/components";
import HeaderSm from "./HeaderSm";

interface CommonHeaderProps {
  data: {
    isWhiteHeaderBg?: boolean;
  }
}

const CommonHeader = ({ data }: CommonHeaderProps) => {
  return (
    <header id="header" className="fixed top-0 left-0 z-[1040] w-full h-[76px] transition-all bg-transparent">
      <meta id="mobile-breakpoint" name="mobile-breakpoint" content="1024" />
      <div className="hidden shadow-[0_4px_4px_rgba(0,0,0,0.05)]" />
      <div className="container h-full">
        <nav className="flex justify-between h-full">
          <div className="flex items-center">
            <a href="/" className="w-[148px] lg:w-[170px] h-[34px] lg:h-[40px]">
              <img src="/images/valoriz-logo-white.svg" black-src="/images/valoriz-logo-white.svg" white-src="/images/valoriz-logo.svg" className="w-full h-full transition-all" alt="Brand Logo" width={170} height={40} loading="eager" id="brand-logo-white" />
            </a>
          </div>
          <div className="flex justify-end max-xl:items-center transition-all text-gray-light" id="header-container-div">
            <div className="header_hover_bg relative group">
              <a
                href="/services"
                className="hidden xl:flex items-center hover:text-black h-full text-md font-medium px-4"
              >
                Our Services
              </a>
              {/* Sub menu */}
              <div className="opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto fixed left-0 w-full text-black bg-white py-10 transition-all z-20">
                <Dynamic id="web_sub_menu_1">
                  <div className="container">
                    <div className="grid grid-cols-4 gap-5">
                      <div className="pe-10">
                        <h6 className="text-xxl">
                          Turning complexity into simplicity, <br /> so you can
                          focus on success.
                        </h6>
                        <a href="/services" className="flex items-center text-sm mt-8" id="header-view-services">
                          View All Services
                          <Icon src={ArrowRight} size="sm" className="ms-2" />
                        </a>
                      </div>
                      <div className="flex flex-col gap-6">
                        <a
                          href="/digital-commerce"
                          className="hover:underline"
                        >
                          Digital Commerce
                        </a>
                        <a href="/ai-ml" className="hover:underline">
                          AI & ML
                        </a>
                        <a
                          href="/cloud-modernization"
                          className="hover:underline"
                        >
                          Cloud Modernization
                        </a>
                        <a
                          href="/digital-experience"
                          className="hover:underline"
                        >
                          Digital Experience
                        </a>
                      </div>
                      <div className="flex flex-col gap-6">
                        <a href="/data-analytics" className="hover:underline">
                          Data Analytics
                        </a>
                        <a
                          href="/enterprise-software"
                          className="hover:underline"
                        >
                          Enterprise Software
                        </a>
                        <a
                          href="/product-engineering"
                          className="hover:underline"
                        >
                          Product Engineering
                        </a>
                        <a href="/dp-automation" className="hover:underline">
                          Digital Process Automation
                        </a>
                      </div>
                      <div className="flex flex-col gap-6">
                        <a href="/mobile-app" className="hover:underline">
                          Mobile Applications
                        </a>
                        <a href="/qa-testing" className="hover:underline">
                          QA & Testing
                        </a>
                        <a href="/digital-marketing" className="hover:underline">
                          Digital Marketing
                        </a>
                      </div>
                    </div>
                  </div>
                </Dynamic>
              </div>
            </div>
            <a
              href="/industry"
              className="hidden xl:flex items-center h-full text-md font-medium px-4"
            >
              Industry
            </a>
            <a
              href="/case-studies"
              className="hidden xl:flex items-center h-full text-md font-medium px-4"
            >
              Case Studies
            </a>
            <div className="header_hover_bg relative group">
              <a
                href=" "
                className="hidden xl:flex items-center hover:text-black h-full text-md font-medium px-4"
              >
                Insights
              </a>
              {/* Sub menu */}
              <div className="opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto fixed left-0 w-full text-black bg-white py-10 transition-all z-20">
                <Dynamic id="web_sub_menu_2">
                  <div className="container">
                    <div className="grid grid-cols-4 gap-5">
                      <div className="pe-10">
                        <h6 className="text-xxl">
                          Discover how We share knowledge.
                        </h6>
                      </div>
                      <div className="flex flex-col gap-6">
                        <a href="/blogs" className="hover:underline">
                          Blogs
                        </a>
                        <a href=" " className="hover:underline">
                          Podcasts
                        </a>
                        <a href=" " className="hover:underline">
                          Webinars
                        </a>
                      </div>
                      <div className="flex flex-col gap-6">
                        <a href="/partners" className="hover:underline">
                          Partners
                        </a>
                        <a href="/careers" className="hover:underline">
                          Careers
                        </a>
                        <a href="/life-at-valoriz" className="hover:underline">
                          Life at Valoriz
                        </a>
                      </div>
                    </div>
                  </div>
                </Dynamic>
              </div>
            </div>
            <a
              href="/about"
              className="hidden xl:flex items-center h-full text-md font-medium px-4"
            >
              About Us
            </a>
            <a
              href="/products"
              className="hidden xl:flex items-center h-full text-md font-medium px-4"
            >
              Products
            </a>
            <a
              aria-label="phone call"
              href="tel:+918848815445"
              className="xl:hidden me-8"
              id="call-icon"
            >
              <Icon src={Call} size="md" />
            </a>
            <button className="xl:hidden" id="mobile-menu-open" aria-label="menu icon">
              <Icon src={HamburgerIcon} size="md" />
            </button>
            <button className="hidden" id="mobile-menu-close">
              <Icon src={Close} size="md" variant="black" />
            </button>
          </div>
          <div className="hidden xl:flex items-center">
            <a href="/contact">
              <Button size="md" className="border border-white text-white bg-transparent hover:bg-white hover:text-secondary active:bg-beige active:text-secondary focus:outline-none transition-all duration-300 flex items-center transition-all group" id="header-contact-btn">
                <Icon src={Call} size="sm" className="group-hover:animate-shake me-2" />
                <span>Contact Us</span>
              </Button>
            </a>
          </div>

          {/* Mobile background overlay */}
          <div className="fixed left-0 top-[76px] z-10 h-[calc(100vh-76px)] w-full bg-black/60 opacity-0 pointer-events-none transition-opacity" id="mobile-bg-overlay"></div>
          {/* Mobile navigation menu */}
          <div className="fixed left-0 top-[76px] z-20 flex h-[calc(100vh-76px)] w-full max-w-[440px] flex-col bg-white transition-transform duration-300 -translate-x-full" id="mobile-menu">
            <Dynamic id="HeaderMobileMenu">
              <HeaderSm />
            </Dynamic>
          </div>
        </nav>
      </div>

      {/* Only for CSS loading */}
      <span className="hidden backdrop-blur-sm" />

      <Script id="CommonHeader" options={{ isWhiteHeaderBg: data?.isWhiteHeaderBg }}>
        {(gDom: any, options: { isWhiteHeaderBg?: boolean }) => {

          const header = gDom.geById("header");
          const menu = gDom.geById("mobile-menu");
          let isSubMenuLoaded = false;

          // Desktop
          const brandLogoWhite = gDom.geById("brand-logo-white") as HTMLImageElement;
          const containerDiv = gDom.geById("header-container-div");
          const contactBtn = gDom.geById("header-contact-btn") as HTMLButtonElement;

          // Mobile
          const openOverlay = gDom.geById("mobile-menu-open") as HTMLButtonElement;
          const closeOverlay = gDom.geById("mobile-menu-close") as HTMLButtonElement;
          const mobileHeaderBg = gDom.geById("mobile-bg-overlay")
          const callIcon = gDom.geById("call-icon") as HTMLAnchorElement



          let isScrolled = false;


          const handleHeaderBg = (isWhite: boolean) => {

            // state flags
            // const isWhite = ...;  // already available in your code
            // const isScrolled = ...; // already available

            // - If not isWhite: bg-transparent, remove bg-white/shadow; add backdrop-blur only when scrolled
            header?.classList?.toggle("backdrop-blur-sm", !isWhite && isScrolled);

            const isWhiteHeaderBg = document.body.getAttribute("isWhiteHeaderBg") === "true";
            if (isWhite === isWhiteHeaderBg) return;

            document.body.setAttribute("isWhiteHeaderBg", `${isWhite}`)

            brandLogoWhite?.setAttribute("src", brandLogoWhite?.getAttribute(isWhite ? "white-src" : "black-src")!);


            // Text color: when isWhite -> text should be dark (text-gray-dark); otherwise light
            containerDiv?.classList?.toggle("text-gray-dark", isWhite);
            containerDiv?.classList?.toggle("text-gray-light", !isWhite);

            // Header background & shadow:
            // - If isWhite: bg-white + shadow, remove transparent/backdrop
            header?.classList?.toggle("bg-white", isWhite);
            header?.classList?.toggle("bg-transparent", !isWhite);
            header?.classList?.toggle("shadow-[0_4px_4px_rgba(0,0,0,0.05)]", isWhite);

            // Contact button: build class list (keeps base + conditional styles)
            if (contactBtn) {

              // base styles
              contactBtn.style.padding = "0.5rem 1rem"; // py-2 px-4
              contactBtn.style.fontSize = "1rem"; // text-base
              contactBtn.style.fontWeight = "500"; // font-medium
              contactBtn.style.borderRadius = "0.25rem"; // rounded
              contactBtn.style.height = "38px"; // h-[38px]
              contactBtn.style.display = "flex";
              contactBtn.style.alignItems = "center";
              contactBtn.style.outline = "none";

              const white = "#fff";
              const secondary = "#000";
              const beige = "#f5f5dc"; // change if you have a custom beige

              if (isWhite) {

                contactBtn.style.border = `1px solid ${secondary}`;
                contactBtn.style.backgroundColor = secondary;
                contactBtn.style.color = white;

                contactBtn.onmouseenter = () => {
                  contactBtn.style.backgroundColor = secondary;
                  contactBtn.style.color = white;
                };

                contactBtn.onmouseleave = () => {
                  contactBtn.style.backgroundColor = secondary;
                  contactBtn.style.color = white;
                };

                contactBtn.onmousedown = () => {
                  contactBtn.style.backgroundColor = secondary;
                };

                contactBtn.onmouseup = () => {
                  contactBtn.style.backgroundColor = secondary;
                };

              } else {

                contactBtn.style.border = `1px solid ${white}`;
                contactBtn.style.backgroundColor = "transparent";
                contactBtn.style.color = white;
                contactBtn.style.transition = "all 0.3s"; // duration-300

                contactBtn.onmouseenter = () => {
                  contactBtn.style.backgroundColor = white;
                  contactBtn.style.color = secondary;
                };

                contactBtn.onmouseleave = () => {
                  contactBtn.style.backgroundColor = "transparent";
                  contactBtn.style.color = white;
                };

                contactBtn.onmousedown = () => {
                  contactBtn.style.backgroundColor = beige;
                  contactBtn.style.color = secondary;
                };

                contactBtn.onmouseup = () => {
                  contactBtn.style.backgroundColor = white;
                  contactBtn.style.color = secondary;
                };
              }

            }
          };

          // For improving speed index
          const loadDynamicContents = () => {
            if (isSubMenuLoaded) return;
            gDom.loadDynamicComponent("web_sub_menu_1", () => {
              console.log("web_sub_menu_1 loaded");
            });
            gDom.loadDynamicComponent("web_sub_menu_2", () => {
              console.log("web_sub_menu_2 loaded");
            });
            isSubMenuLoaded = true;
          }

          const detectBackground = () => {
            loadDynamicContents();
            const y = header.offsetHeight + 1;
            const elements = document.elementsFromPoint(window.innerWidth / 2, y);
            const solidBg = elements.some(el => {
              const bg = getComputedStyle(el).backgroundColor;
              return bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent" && bg !== "rgb(255, 255, 255)";
            });



            handleHeaderBg(!solidBg)

          };


          const toggleMobileMenu = (open: boolean) => {
            document.body.classList.toggle("overflow-hidden", open);
            menu?.classList.toggle("translate-x-0", open);
            menu?.classList.toggle("-translate-x-full", !open);
          };




          header.querySelectorAll(".header_hover_bg").forEach((each: HTMLElement) => {
            each.addEventListener("mouseenter", () => handleHeaderBg(true));
            each.addEventListener("mouseleave", () => detectBackground());
          });

          // For Mobile side menu contact button
          function setRealVH() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
          }

          window.addEventListener("scroll", () => { const scrollTop = window.scrollY; isScrolled = scrollTop > 10; detectBackground(); });
          window.addEventListener("resize", () => {
            detectBackground();
            setRealVH();
          });

          openOverlay.onclick = (e) => {
            e?.preventDefault();

            gDom.loadDynamicComponent("HeaderMobileMenu", () => {
              toggleMobileMenu(true);
              handleHeaderBg(true);
              setRealVH();

              callIcon.className = "hidden"
              openOverlay.className = "hidden"
              closeOverlay.className = "xl:hidden"
              mobileHeaderBg?.classList?.remove("opacity-0")
              mobileHeaderBg?.classList?.remove("pointer-events-none")
              mobileHeaderBg?.classList?.add("opacity-100")

              // For mobile submenus
              document.querySelectorAll(".open_mob_sub_menu")?.forEach((each) => {
                const element = each as HTMLDivElement;

                element.querySelector(".open_mob_sub_menu_title")?.addEventListener("click", () => {
                  const attribute = `mobile-menu-${element?.dataset?.index}`;
                  const heading = element?.querySelector(`.open_mob_sub_menu_h3`)
                  const subMenuList = element?.querySelector(`.open_mob_sub_menu_list`)
                  const chevronUp = element?.querySelector(`#submenu_chevron_up`)
                  const chevronDown = element?.querySelector(`#submenu_chevron_down`)
                  const isMenuOpen = document.body.getAttribute(attribute) === "true";

                  if (isMenuOpen) {
                    chevronDown?.classList.remove("hidden")
                    chevronUp?.classList?.add("hidden")
                    heading?.classList.replace('text-[#2D5F52]', "text-black");
                    subMenuList?.classList.remove("max-h-screen")
                    subMenuList?.classList.remove("border-t")
                    subMenuList?.classList.add("max-h-0")
                    document.body.setAttribute(attribute, "false");
                  } else {
                    chevronUp?.classList?.remove("hidden")
                    chevronDown?.classList.add("hidden")
                    heading?.classList.replace('text-black', 'text-[#2D5F52]');
                    subMenuList?.classList.remove("max-h-0")
                    subMenuList?.classList.add("max-h-screen")
                    subMenuList?.classList.add("border-t")
                    document.body.setAttribute(attribute, "true");
                  }
                })
              })

            });
          };



          closeOverlay.onclick = (e) => {
            e?.preventDefault();
            toggleMobileMenu(false);
            setTimeout(() => {
              detectBackground();
            }, 50);
            callIcon.className = "xl:hidden me-8"
            openOverlay.className = "xl:hidden"
            closeOverlay.className = "hidden"
            mobileHeaderBg?.classList?.remove("opacity-100")
            mobileHeaderBg?.classList?.add("opacity-0")
            mobileHeaderBg?.classList?.add("pointer-events-none")

          };

          // Start
          if (!gDom.ftr) {
            setTimeout(detectBackground, 100);
          } else if (options?.isWhiteHeaderBg) {
            handleHeaderBg(true);
          }
        }}
      </Script>
    </header>)
}

export default CommonHeader;