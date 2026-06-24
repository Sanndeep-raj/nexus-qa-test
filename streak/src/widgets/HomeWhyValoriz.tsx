import SanityImage from "@common/components/SanityImage";
import ScrollFade from "@common/components/ScrollFade";
import { Script } from "streak/components";

const StatItem = (props: any) => {
  const { image, alt, title, desc, index, contentsLength } = props || {};
  return (
    <div
      className={`flex w-full opacity-0 translate-y-10 transition-all duration-700 ease-out ${index < contentsLength - 1 ? "mb-6" : ""}`}
      data-stat-item
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="pe-8 lg:pe-13">
        <SanityImage
          src={image}
          width={56}
          height={56}
          alt={alt}
          className="max-w-full"
          loading="lazy"
        />
      </div>
      <div className="flex-1">
        <h4 className="text-h4 lg:text-h3">{title}</h4>
        <p className="text-md lg:text-xxl">{desc}</p>
        {index < contentsLength - 1 && (
          <div className="h-[1px] bg-[linear-gradient(90deg,_rgba(0,72,54,1)_0%,_rgba(1,27,20,1)_100%)] mt-6" />
        )}
      </div>
    </div>
  );
};


const HomeWhyValoriz = (props: any) => {
  return (
    <section className="flex items-center justify-center xl:min-h-screen text-white bg-black py-12 xl:py-20 xxl:py-26">
      <ScrollFade>
        <div className="container will-change-transform">
          <h3 className="text-h4 xl:text-h2 mb-10 xl:mb-3">Why Valoriz?</h3>
          <div className="flex lg:items-center lg:gap-28">
            <div className="w-1/2 max-lg:hidden">
              <SanityImage
                src={props?.data?.media}
                width={664}
                height={664}
                alt={props?.data?.media?.alt}
                className="w-full max-w-[664px] mx-auto"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2">
              {props?.data?.contents?.map((each: any, index: number) => (
                <StatItem
                  key={each?._key}
                  image={each?.media}
                  alt={each?.media?.alt}
                  title={each?.title}
                  desc={each?.description}
                  index={index}
                  contentsLength={props?.data?.contents?.length}
                />
              ))}
            </div>
          </div>
        </div>
        <Script id="HomeWhyValoriz">
          {() => {
            const statItems = document.querySelectorAll("[data-stat-item]");

            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100", "translate-y-0");
                    entry.target.classList.remove("opacity-0", "translate-y-10");
                  } else {
                    entry.target.classList.remove("opacity-100", "translate-y-0");
                    entry.target.classList.add("opacity-0", "translate-y-10");
                  }
                });
              },
              { threshold: 0.4 }
            );

            statItems.forEach((el) => observer.observe(el));
          }}
        </Script>
      </ScrollFade>
    </section>
  )
}

export default HomeWhyValoriz;