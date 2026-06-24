import Icon from "@common/components/Icon";
import ChevronDown from "@common/icons/ChevronDown";
import Distribution from "common/components/industry/Distribution";
import Retail from "@common/components/industry/Retail";
import RealEstate from "@common/components/industry/RealEstate";
import ModalRealEstate from "@common/components/industry/ModalRealEstate";
import ModalRetail from "@common/components/industry/ModalRetail";
import ModalDistribution from "@common/components/industry/ModalDistribution";
import ModalHospitality from "@common/components/industry/ModalHospitality";
import Hospitality from "@common/components/industry/Hospitality";
import ModalManufacturing from "@common/components/industry/ModalManufacturing";
import Manufacturing from "@common/components/industry/Manufacturing";
import EduTech from "@common/components/industry/EduTech";
import ModalEduTech from "@common/components/industry/ModalEduTech";
import Entertainment from "@common/components/industry/Entertainment";
import ModalEntertainment from "@common/components/industry/ModalEntertainment";
import ModalTravelTourism from "@common/components/industry/ModalTravelTourism";
import TravelTourism from "@common/components/industry/TravelTourism";
import ModalHealthCare from "@common/components/industry/ModalHealthCare";
import HealthCare from "@common/components/industry/HealthCare";
import FinTech from "@common/components/industry/FinTech";
import ModalFinTech from "@common/components/industry/ModalFinTech";
import Brands from "@common/components/industry/Brands";
import ModalBrand from "@common/components/industry/ModalBrand";
import { Script } from "streak/components";

const Industry = () => {
  let modals = {
    distribution: true,
    retail: true,
    realEstate: true,
    hospitality: true,
    manufacturing: true,
    edutech: true,
    entertainment: true,
    travel: true,
    healthcare: true,
    fintech: true,
    brands: true,
  };

  const sections = [
    {
      key: "distribution",
      title: "Distribution",
      component: <Distribution />,
      modal: (
        <ModalDistribution
          isOpen={modals.distribution}
          onClose={() => "distribution"}
        />
      ),
    },
    {
      key: "retail",
      title: "Retail",
      component: <Retail />,
      modal: (
        <ModalRetail
          isOpen={modals.retail}
          onClose={() => "retail"}
        />
      ),
    },
    {
      key: "realEstate",
      title: "Real Estate",
      component: <RealEstate />,
      modal: (
        <ModalRealEstate
          isOpen={modals.realEstate}
          onClose={() => "realEstate"}
        />
      ),
    },
    {
      key: "hospitality",
      title: "Hospitality",
      component: <Hospitality />,
      modal: (
        <ModalHospitality
          isOpen={modals.hospitality}
          onClose={() => "hospitality"}
        />
      ),
    },
    {
      key: "manufacturing",
      title: "Manufacturing",
      component: <Manufacturing />,
      modal: (
        <ModalManufacturing
          isOpen={modals.manufacturing}
          onClose={() => "manufacturing"}
        />
      ),
    },
    {
      key: "edutech",
      title: "Edutech",
      component: <EduTech />,
      modal: (
        <ModalEduTech
          isOpen={modals.edutech}
          onClose={() => "edutech"}
        />
      ),
    },
    {
      key: "entertainment",
      title: "Entertainment",
      component: <Entertainment />,
      modal: (
        <ModalEntertainment
          isOpen={modals.entertainment}
          onClose={() => "entertainment"}
        />
      ),
    },
    {
      key: "travel",
      title: "Travel & Tourism",
      component: <TravelTourism />,
      modal: (
        <ModalTravelTourism
          isOpen={modals.travel}
          onClose={() => "travel"}
        />
      ),
    },
    {
      key: "healthcare",
      title: "Healthcare",
      component: <HealthCare />,
      modal: (
        <ModalHealthCare
          isOpen={modals.healthcare}
          onClose={() => "healthcare"}
        />
      ),
    },
    {
      key: "fintech",
      title: "FinTech",
      component: <FinTech />,
      modal: (
        <ModalFinTech
          isOpen={modals.fintech}
          onClose={() => "fintech"}
        />
      ),
    },
    {
      key: "brands",
      title: "Brands",
      component: <Brands />,
      modal: (
        <ModalBrand
          isOpen={modals.brands}
          onClose={() => "brands"}
        />
      ),
    },
  ];

  return (
    <>
      {sections.map(({ key, modal }) => (
        <div key={key} id={`modal-${key}`} className="hidden">
          {modal}
        </div>
      ))}

      <section className="relative py-12 xl:py-20 xxl:py-26">
        <div className="container">
          <h3 className="text-h4 xl:text-h2">Industries</h3>

          {sections.map(({ key, title, component }, index) => (
            <div key={key} className="section-industry" data-section={key}>
              <div
                data-div={key}
                className={`flex items-center justify-between cursor-pointer py-6 xl:py-10 border-gray-dark ${index === sections.length - 1 ? "" : "border-b"}`}
              >
                <span data-value={key} className="text-xxl xl:text-h5">
                  {title}
                </span>
                <div data-icon={key}>
                  <Icon
                    src={ChevronDown}
                    className="transform transition-transform duration-300 rotate-0"
                  />
                </div>
              </div>

              <div id={`component-${key}`} className="hidden">
                {component}
              </div>
            </div>
          ))}
        </div>

        <Script id="Industry" options={{ sections: sections, modals: modals }}>
          {(gDom: any, options: any) => {
            const motionEvent = "ce-sl-motion";
            let isMobile = window.innerWidth < 1280;
            const sections = options?.sections;

            const handleAfterMotionLoads = ({ detail }: any) => {

              const Motion = detail.Motion;
              function removeAllListeners() {
                const headers = document.querySelectorAll("[data-section]");
                const hoverTitles = document.querySelectorAll("[data-div]");

                headers.forEach((header) => {
                  header.replaceWith(header.cloneNode(true));
                });

                hoverTitles.forEach((sec) => {
                  sec.replaceWith(sec.cloneNode(true));
                });
              }

              function handleAnimation(isMobile: boolean) {
                if (!isMobile) {
                  const components = document.querySelectorAll("[id^='component-']");
                  components.forEach((comp) => {
                    comp.addEventListener("click", (e) => {
                      e.stopPropagation();
                    });
                  });
                  const hoverTitles = document.querySelectorAll("[data-div]");
                  hoverTitles.forEach((sec) => {
                    const title = sec.querySelector("[data-value]");
                    if (!title) return;

                    sec.addEventListener("mouseenter", () => {
                      Motion.animate(
                        title,
                        { marginLeft: 30 },
                        {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          duration: 0.8,
                        }
                      );
                    });

                    sec.addEventListener("mouseleave", () => {
                      Motion.animate(
                        title,
                        { marginLeft: 6 },
                        {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          duration: 0.8,
                        }
                      );
                    });
                  });

                  const sectionHeaders =
                    document.querySelectorAll("[data-section]");
                  sectionHeaders.forEach((header) => {
                    header.addEventListener("click", () => {
                      if (window.innerWidth < 1280) return;
                      const key = header.getAttribute("data-section");
                      const component = document.getElementById(
                        `component-${key}`
                      );
                      const title = header.querySelector("[data-value]");
                      const innerDiv = header.querySelector(
                        `[data-div="${key}"]`
                      );
                      const icon = header.querySelector(
                        `[data-icon="${key}"]`
                      );

                      if (!component || !title) return;

                      const isOpen = !component.classList.contains("hidden");

                      document
                        .querySelectorAll("[id^='component-']")
                        .forEach((c) => c.classList.add("hidden"));
                      document.querySelectorAll("[data-div]").forEach((d) => {
                        d.classList.remove("border-primary");
                        d.classList.add("border-gray-dark");
                      });
                      document
                        .querySelectorAll("[data-value]")
                        .forEach((t) => t.classList.remove("text-primary"));
                      document.querySelectorAll("[data-icon]").forEach((t) => {
                        t.classList.remove("rotate-180", "fill-primary");
                      });

                      const svg = icon?.querySelector("svg");
                      if (svg) {
                        svg.style.fill = isOpen
                          ? ""
                          : "var(--color-primary)";
                      }

                      if (!isOpen) {
                        component.classList.remove("hidden");
                        title.classList.add("text-primary");
                        innerDiv?.classList.remove("border-gray-dark");
                        innerDiv?.classList.add("border-primary");

                        icon?.classList.add(
                          "transform",
                          "transition-transform",
                          "duration-300"
                        );
                        icon?.classList.add("rotate-180", "fill-primary");
                      } else {
                        icon?.classList.remove("rotate-180", "fill-primary");
                      }
                    });
                  });
                } else {
                  const hoverTitles = document.querySelectorAll("[data-div]");
                  hoverTitles.forEach((sec) => {
                    const title = sec.querySelector("[data-value]");
                    if (!title) return;

                    sec.addEventListener("touchstart", () => {
                      Motion.animate(
                        title,
                        { marginLeft: 30 },
                        {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          duration: 0.8,
                        }
                      );
                    });

                    sec.addEventListener("touchend", () => {
                      Motion.animate(
                        title,
                        { marginLeft: 6 },
                        {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          duration: 0.8,
                        }
                      );
                    });
                  });
                  const headers = document.querySelectorAll("[data-section]");
                  headers.forEach((header) => {
                    header.addEventListener("click", () => {
                      if (window.innerWidth >= 1280) return;
                      const key = header.getAttribute("data-section");
                      const modalContainer = document.getElementById(`modal-${key}`);
                      if (!modalContainer) return;
                      modalContainer.classList.remove("hidden");
                      document.body.style.overflow = "hidden";
                      const closeBtn = modalContainer.querySelector("button");
                      if (closeBtn) {
                        closeBtn.addEventListener("click", () => {
                          modalContainer.classList.add("hidden");
                          document.body.style.overflow = "";
                        });
                      }

                      modalContainer.addEventListener("click", (e) => {
                        if (e.target === modalContainer) {
                          modalContainer.classList.add("hidden");
                          document.body.style.overflow = "";
                        }
                      });
                    });
                  });
                }
              }
              const checkIsMobile = () => {
                isMobile = window.innerWidth < 1280;
                if (isMobile) {
                  document.querySelectorAll("[id^='component-']")
                    .forEach((c) => c.classList.add("hidden"));

                  document.querySelectorAll("[data-icon]")
                    .forEach(icon => icon.classList.remove("rotate-180", "fill-primary"));

                  document.querySelectorAll("[data-value]")
                    .forEach(title => title.classList.remove("text-primary"));

                  document.querySelectorAll("[data-div]")
                    .forEach(div => {
                      div.classList.remove("border-primary");
                      div.classList.add("border-gray-dark");
                    });
                }

                removeAllListeners();
                handleAnimation(isMobile);
                handleHashLoad();
              };
              function handleHashLoad() {
                let id: any = null;
                if (window.location.hash) {
                  id = window.location.hash.substring(1);
                  sections.forEach((item: any) => {
                    if (item?.key === id) {
                      if (isMobile) {
                        const modalContainer = document.getElementById(`modal-${id}`);
                        if (modalContainer) {
                          modalContainer.classList.remove("hidden");
                          document.body.style.overflow = "hidden";

                          const closeBtn = modalContainer.querySelector("button");
                          if (closeBtn) {
                            closeBtn.addEventListener("click", () => {
                              modalContainer.classList.add("hidden");
                              document.body.style.overflow = "";
                            });
                          }

                          modalContainer.addEventListener("click", (e) => {
                            if (e.target === modalContainer) {
                              modalContainer.classList.add("hidden");
                              document.body.style.overflow = "";
                            }
                          });
                        }
                      } else {
                        const hashsec = document.querySelector(`#component-${id}`);
                        const header = document.querySelector(`[data-section="${id}"]`);
                        if (header) {
                          const navbarHeight = 60;

                          const elementTop =
                            header.getBoundingClientRect().top + window.scrollY;

                          const scrollTo = elementTop - navbarHeight;

                          window.scrollTo({
                            top: scrollTo,
                            behavior: "smooth",
                          });
                        }
                        if (!hashsec || !header) return;
                        const title = header.querySelector("[data-value]");
                        const innerDiv = header.querySelector(`[data-div="${id}"]`);
                        const icon = header.querySelector(`[data-icon="${id}"]`);
                        const svg = icon?.querySelector("svg");

                        const isOpen = !hashsec.classList.contains("hidden");

                        document.querySelectorAll("[id^='component-']").forEach((c) => c.classList.add("hidden"));
                        document.querySelectorAll("[data-div]").forEach((d) => {
                          d.classList.remove("border-primary");
                          d.classList.add("border-gray-dark");
                        });
                        document.querySelectorAll("[data-value]").forEach((t) => t.classList.remove("text-primary"));
                        document.querySelectorAll("[data-icon]").forEach((t) => {
                          t.classList.remove("rotate-180", "fill-primary");
                        });

                        if (svg) {
                          svg.style.fill = isOpen ? "" : "var(--color-primary)";
                        }

                        if (!isOpen) {
                          hashsec.classList.remove("hidden");
                          title?.classList.add("text-primary");
                          innerDiv?.classList.remove("border-gray-dark");
                          innerDiv?.classList.add("border-primary");

                          icon?.classList.add("transform", "transition-transform", "duration-300");
                          icon?.classList.add("rotate-180", "fill-primary");
                        } else {
                          icon?.classList.remove("rotate-180", "fill-primary");
                        }
                      }
                    }

                  })

                }
              }
              checkIsMobile();
              window.addEventListener("resize", checkIsMobile);
            };

            gDom.addEventListener(motionEvent, handleAfterMotionLoads);
            if (gDom.triggeredEvents && gDom.triggeredEvents[motionEvent]) {
              handleAfterMotionLoads({
                detail: gDom.triggeredEvents[motionEvent],
              });
              gDom.removeEventListener(motionEvent, handleAfterMotionLoads);
            }
          }}
        </Script>
      </section>
    </>
  );
};

export default Industry;
