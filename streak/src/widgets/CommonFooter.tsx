import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ChevronUp from "@common/icons/ChevronUp";
import Telephone from "@common/icons/Telephone";
import IconMail from "@common/icons/IconMail";
import Instagram from "@common/icons/Instagram";
import LinkedIn from "@common/icons/LinkedIn";
import Threads from "@common/icons/Threads";
import Twitter from "@common/icons/Twitter";
import Youtube from "@common/icons/Youtube";
import Facebook from "@common/icons/Facebook";
import { Script } from "streak/components";

const Copyright = () => {
  return (
    <div className="flex flex-wrap xl:justify-between">
      <div className="xl:flex w-full xl:w-1/2 text-white">
        <div className="flex items-center justify-center xl:justify-start space-x-6">
          <a
            href="https://www.linkedin.com/company/valoriz-digital/"
            target="_blank"
            aria-label="valoriz linkedin"
          >
            <Icon src={LinkedIn} variant="gray400" />
          </a>
          <a
            href="https://www.youtube.com/@valorizdigital"
            target="_blank"
            aria-label="valoriz youTube"
          >
            <Icon src={Youtube} variant="gray400" size="lg" />
          </a>
          <a
            href="https://www.instagram.com/explore/locations/799885436715019/valoriz-digital/#"
            target="_blank"
            aria-label="valoriz instagram"
          >
            <Icon src={Instagram} variant="gray400" />
          </a>
          <a
            href="https://www.facebook.com/valorizdigital"
            target="_blank"
            aria-label="valoriz facebook"
          >
            <Icon src={Facebook} variant="gray400" />
          </a>
          <a
            href="https://x.com/valorizdigital"
            target="_blank"
            aria-label="valoriz twitter"
          >
            <Icon src={Twitter} variant="gray400" />
          </a>
          <a
            href="https://www.threads.net/@valorizdigital"
            target="_blank"
            aria-label="valoriz threads"
          >
            <Icon src={Threads} variant="gray400" />
          </a>
        </div>
        <div className="flex justify-center space-x-2 xl:ms-12 mt-12 xl:mt-0">
          <a
            className="transition duration-300 delay-200 hover:text-primary"
            href="/privacy-policy"
          >
            Privacy policy
          </a>
          <span className="text-gray-light">|</span>
          <a
            className="transition duration-300 delay-200 hover:text-primary"
            href=" "
          >
            Terms & Conditions
          </a>
        </div>
      </div>
      <div className="w-full xl:w-1/2">
        <p className="text-gray-100 text-center xl:text-end mt-4 xl:mt-0">
          Valoriz
          <span className="text-gray-normal">© 2026 All rights Reserved</span>
        </p>
      </div>
    </div>
  );
}

const FooterNav = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 grid-auto-cols-[30%] gap-x-4 gap-y-14 mt-12 text-white">
      <div className="col-span-2 md:col-span-1">
        <h1 className="text-xxl">Registered Office</h1>
        <div className="mt-6">
          <p>L-2, -1 Floor</p>
          <p>Thejaswini Building,</p>
          <p>Technopark, Trivandrum, India</p>
        </div>
        <div className="mt-8">
          <p>3rd Floor</p>
          <p>Thapasya Building</p>
          <p>Infopark, Phase-1</p>
          <p>Kochi, India</p>
        </div>
        <div className="mt-8">
          <p>704-A</p>
          <p>Aspin commercial tower</p>
          <p>Sheikh Zayed Road</p>
          <p>Dubai, UAE</p>
        </div>
        <a
          className="flex items-center text-md transition duration-300 delay-200 hover:text-primary mt-8 xl:mt-12"
          href="tel:+91 471 270 0666"
        >
          <span className="me-4">
            <Icon src={Telephone} variant="white" />
          </span>
          +91 471 270 0666
        </a>
        <a
          className="flex items-center text-md transition duration-300 delay-200 hover:text-primary mt-6 xl:mt-8"
          href="mailto:info@valoriz.com"
        >
          <span className="me-4">
            <Icon src={IconMail} variant="white" />
          </span>
          info@valoriz.com
        </a>
      </div>
      <div className="col-span-2 md:col-span-1">
        <div className="flex lg:block flex-wrap space-x-4 md:space-x-0">
          <div>
            <h1 className="text-xxl">Company</h1>
            <div>
              <a
                className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
                href="/about"
              >
                About Us
              </a>
              <a
                className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
                href="/case-studies"
              >
                Works
              </a>
              <a
                className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
                href="/clients"
              >
                Our Clients
              </a>
              <a
                className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
                href="/products"
              >
                Products
              </a>
              <a
                className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
                href="/partners"
              >
                Partners
              </a>
              <a
                className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
                href="/awards"
              >
                Awards and Recognitions
              </a>
              <a
                className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
                href="/careers"
              >
                Careers
              </a>
              <a
                className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
                href="/life-at-valoriz"
              >
                Life At Valoriz
              </a>
              <a
                className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
                href=" "
              >
                Download Brochure
              </a>
            </div>
          </div>
          <div className="md:mt-16">
            <h1 className="text-xxl">More</h1>
            <div>
              <a
                className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
                href="/blogs"
              >
                Blogs
              </a>
              <a
                className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
                href=" "
              >
                Podcasts
              </a>
              <a
                className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
                href=" "
              >
                Webinars
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xxl">Services</h1>
        <div>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/digital-commerce"
          >
            Digital Commerce
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/data-analytics"
          >
            Data Analytics
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/mobile-app"
          >
            Mobile Applications
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/ai-ml"
          >
            AI & ML
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/enterprise-software"
          >
            Enterprise Software
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/qa-testing"
          >
            QA & Testing
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/cloud-modernization"
          >
            Cloud Modernization
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/product-engineering"
          >
            Product Engineering
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/dp-automation"
          >
            Digital Process Automation
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/digital-experience"
          >
            Digital Experience
          </a>
        </div>
      </div>
      <div>
        <h1 className="text-xxl">Industries</h1>
        <div>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/industry#distribution"
          >
            Distribution
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/industry#retail"
          >
            Retail
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/industry#realEstate"
          >
            Real Estate
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/industry#hospitality"
          >
            Hospitality
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/industry#manufacturing"
          >
            Manufacturing
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/industry#edutech"
          >
            Edutech
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/industry#entertainment"
          >
            Entertainment
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/industry#travel"
          >
            Travel & Tourism
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/industry#healthcare"
          >
            Healthcare
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/industry#fintech"
          >
            Fintech
          </a>
          <a
            className="block xl:text-md transition duration-300 delay-200 hover:text-primary mt-6"
            href="/industry#brands"
          >
            Brands
          </a>
        </div>
      </div>
    </div>
  );
}

const CommonFooter = () => {
  return (
    <footer className="bg-black py-12 xl:py-20 xxl:py-26">
      <div className="container">
        <div className="grid grid-cols-1">
          <div>
            <img src="/images/valoriz-logo-white.svg" width={203} height={48} alt="valoriz logo" loading="lazy" />
            <p className="text-gray-normal text-md font-normal mt-4">Raising values through collaboration!</p>
          </div>
          <FooterNav />
          <div className="flex text-white justify-between items-center my-24 lg:my-16">
            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <a href="https://wa.me/+918848815445">
                <Button
                  className="flex items-center w-auto h-16 text-[#139A53] text-md md:text-xl font-semibold border rounded-lg border-[#139A53] hover:bg-[#139A53] hover:text-white"
                  variant="outline-primary"
                >
                  <img className="me-4" src="/images/whatsapp-multi-color.svg" alt="WhatsApp" loading="lazy" />
                  Connect us via WhatsApp
                </Button>
              </a>
            </div>
            <div className="hidden md:block">
              <Button className="w-full h-auto text-base bg-tranparent p-0 footer_scroll_to_top">
                <Icon className="mx-auto" src={ChevronUp} />
                <span className="mt-2">Scroll to Top</span>
              </Button>
            </div>
          </div>
        </div>
        <Copyright />
        <div className="md:hidden text-center mt-24">
          <Button className="h-auto text-base  bg-tranparent p-0 footer_scroll_to_top">
            <Icon className="mx-auto" src={ChevronUp} />
            <span className="mt-2">Scroll to Top</span>
          </Button>
        </div>
      </div>
      <Script id="CommonFooter">
        {() => {
          document.querySelectorAll(".footer_scroll_to_top")?.forEach((btn) => {
            const button: HTMLButtonElement = btn as HTMLButtonElement;
            button.addEventListener("click", () => window?.scrollTo({ top: 0, behavior: "smooth" }));
          })
        }}
      </Script>
    </footer>
  );
}

export default CommonFooter;