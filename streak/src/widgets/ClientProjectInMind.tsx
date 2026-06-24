import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ScrollFade from "@common/components/ScrollFade";
import ArrowRight from "@common/icons/ArrowRight";
import IconMail from "@common/icons/IconMail";

const HomeProjectInMind = () => {
  return (
    <section className="bg-light-gradient py-12 xl:py-20 xxl:py-26">
      <ScrollFade>
        <div className="container will-change-transform">
          <h2 className="text-h4 xl:text-h2">Have A Project In Mind?</h2>
          <h3 className="text-xxl xl:text-h5 mt-4">It takes less than a minute</h3>
          <div className="flex xl:justify-evenly flex-col xl:flex-row flex-wrap my-24 space-y-16 xl:space-y-0">
            <div className="flex items-start xl:items-center space-x-6">
              <img
                src="/images/icon-colored/icon-india-gate.svg"
                width={64}
                height={64}
                alt="IndiaGate"
                loading="lazy"
              />
              <div>
                <p className="text-xxl">India</p>
                <p className="text-h5 leading-snug">
                  <span className="text-gray-600">+91 </span>471 270 0666
                </p>
              </div>
            </div>
            <div className="flex items-start xl:items-center space-x-6">
              <img
                src="/images/icon-colored/icon-dubai.svg"
                width={64}
                height={64}
                alt="Dubai"
                loading="lazy"
              />
              <div>
                <p className="text-xxl">Dubai - UAE</p>
                <p className="text-h5 leading-snug">
                  <span className="text-gray-600">+971 </span>42 23 3920
                </p>
              </div>
            </div>

          </div>
          <div className="flex flex-col xl:flex-row justify-center gap-6 xl:gap-8">
            <a href="mailto:info@valoriz.com" className="w-full xl:w-auto">
              <Button
                className="flex items-center justify-center w-full group"
                variant="outline-secondary"
              >
                <Icon src={IconMail} className="group-hover:animate-shake" />
                <span className="ms-2">Mail Us: info@valoriz.com</span>
              </Button>
            </a>

            <a href="/contact" className="w-full xl:w-auto">
              <Button className="flex items-center justify-center w-full group">
                <span className="me-2">Request A Quote</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 ms-2">
                  <Icon src={ArrowRight} size="sm" />
                </span>
              </Button>
            </a>
          </div>
        </div>
      </ScrollFade>
    </section>
  );
};

export default HomeProjectInMind;