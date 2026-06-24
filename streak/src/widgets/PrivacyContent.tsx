import PortableDescription from "@common/components/PortableDescription";
import { Script } from "streak/components";

interface PrivacyContentProps {
  data: {
    contents: Array<{
      _key: string;
      title: string;
      subtitle: string;
      description: any;
    }>
  }
}
const PrivacyContent = ({ data }: PrivacyContentProps) => {

  return (
    <section className="w-full bg-white text-black scroll-smooth">
      <div className="max-w-7xl mx-auto pt-30 pb-7 px-6 lg:px-0">
        <div className="lg:ml-[calc(22%+2rem)]">
          <h1 className="text-xxl sm:text-3xl xl:text-h3 font-medium">
            Privacy Policy
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex gap-8 px-6 py-2 sm:py-8 mb-12">
        <aside className="hidden lg:block lg:w-[22%]">
          <div className="sticky top-28">
            <ul className="space-y-6 relative" id="PrivacyContentNav">
              {data?.contents?.map((content, index) => (
                <li key={content._key} className="nav-item relative pl-6" data-target={content._key}>
                  <span className="absolute left-0 top-0 w-[2px] h-full bg-gray-200"></span>
                  <span
                    className="line-active absolute left-0 top-0 w-[3px] transition-all duration-300"
                    style={{
                      height: index === 0 ? "100%" : "0%",
                      backgroundColor: "#046249",
                    }}
                  />
                  <a
                    href={`#${content._key}`}
                    className={`nav-link text-base xl:text-lg transition-all duration-300 ${index === 0
                      ? "text-[#046249] font-medium"
                      : "text-black"
                      }`}
                  >
                    {content.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <div className="w-full lg:w-[78%] space-y-8" id="PrivacyContentSections">
          {
            data?.contents?.map((content) => (
              <section key={content._key} id={content._key} className="scroll-mt-[92px]">
                <h2 className="text-xxl xl:text-h5 font-medium mb-3">
                  {content.subtitle}
                </h2>
                <div className="font-medium leading-8">
                  <PortableDescription value={content?.description} />
                </div>
              </section>
            ))
          }
        </div>
      </div>
      <Script id="PrivacyContent">
        {(gDom: any) => {
          const HEADER_OFFSET = 76;
          const rootSection = gDom.geById("PrivacyContentSections");
          const privacyContentNav = gDom.geById("PrivacyContentNav");
          const sections = rootSection?.querySelectorAll("section");
          const navItems = privacyContentNav?.querySelectorAll(".nav-item");

          function handleScroll() {
            let currentId: string = sections[0]?.id || "";
            sections.forEach((section: any) => {
              const rect = section.getBoundingClientRect();
              if (rect.top <= HEADER_OFFSET) {
                currentId = section.id;
              }
            });

            navItems.forEach((item: any) => {
              const line = item.querySelector(".line-active");
              const link = item.querySelector(".nav-link");
              const target = item.dataset.target;

              if (target === currentId) {

                if (line) line.style.height = "100%";

                if (link) {
                  link.classList.add("text-[#046249]", "font-medium");
                  link.classList.remove("text-black");
                }
              } else {

                if (line) line.style.height = "0%";

                if (link) {
                  link.classList.remove("text-[#046249]", "font-medium");
                  link.classList.add("text-black");
                }
              }
            });
          }

          window.addEventListener("scroll", handleScroll);
        }}
      </Script>
    </section>
  );
}

export default PrivacyContent;