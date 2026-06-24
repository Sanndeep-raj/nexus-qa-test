import ScrollFade from "@common/components/ScrollFade";
import { Script } from "streak/components";

const ServicesHighlights = () => {
  return (
    <section className="py-12 xl:py-20 xxl:py-26">
      <ScrollFade>
        <div className="container text-center">
          <h2 className="text-h4 xl:text-h2">The Difference We Make</h2>
          <p className="text-xxl xl:text-h5 mt-10">
            The Power of continuous improvement is what we believe in. With bold
            visions, transformative journeys, and collaborative environments, we
            pave the way for what&rsquo;s next.
          </p>
          <div className="flex max-lg:flex-col max-lg:gap-12 md:items-center md:justify-between lg:gap-8 mt-20 xl:mt-30">
            <div className="lg:flex-1">
              <h3 className="text-h4 xl:text-h3 counter_animation" data-target="10000" data-suffix="+">0</h3>
              <p className="text-xxl mt-2">Sucessful Projects</p>
            </div>
            <div className="lg:flex-1">
              <h3 className="text-h4 xl:text-h3 counter_animation" data-target="25" data-suffix="+">0</h3>
              <p className="text-xxl mt-2">Site Launches</p>
            </div>
            <div className="lg:flex-1">
              <h3 className="text-h4 xl:text-h3 counter_animation" data-target="7" data-suffix=" Million+">0</h3>
              <p className="text-xxl mt-2">Operations</p>
            </div>
          </div>
        </div>
        <Script id="ServicesHighlights">
          {() => {

            const animateCounter = (el: HTMLHeadingElement, duration = 2000) => {
              const target = Number(el.dataset.target) || 0;
              const suffix = el.dataset.suffix || "";
              const startTime = performance.now();

              const update = (time: number) => {
                const progress = Math.min((time - startTime) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = (target * eased).toFixed(target % 1 !== 0 ? 2 : 0);
                el.textContent = value + suffix;
                if (progress < 1) requestAnimationFrame(update);
              };

              requestAnimationFrame(update);
            };

            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    animateCounter(entry.target as HTMLHeadingElement);
                  }
                });
              },
              { threshold: 0.4 }
            );

            document.querySelectorAll(".counter_animation").forEach((counter) => observer.observe(counter))
          }}
        </Script>
      </ScrollFade>
    </section>
  );
}

export default ServicesHighlights;