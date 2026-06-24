import Button from "@common/components/button/Button";
import Icon from "@common/components/Icon";
import ChevronDown from "@common/icons/ChevronDown";
import ChevronUp from "@common/icons/ChevronUp";

const SubMenuChevron = () => (
  <div>
    <div className="hidden" id="submenu_chevron_up">
      <Icon src={ChevronUp} size="sm" />
    </div>
    <div id="submenu_chevron_down">
      <Icon src={ChevronDown} size="sm" />
    </div>
  </div>
)

const HeaderSm = () => {
  return (
    <div className="flex h-[calc(var(--vh)_*_90)] flex-col">
      <div className="flex-1 mt-4 overflow-auto">
        <div className="font-medium">
          <div className="open_mob_sub_menu">
            <div className="open_mob_sub_menu_title flex items-center justify-between border-t py-4 px-6" data-index="1">
              <h3 className="open_mob_sub_menu_h3 text-base md:text-md font-bold text-black">Services</h3>
              <SubMenuChevron />
            </div>
            <div className="open_mob_sub_menu_list overflow-hidden bg-gray-100 transition-all duration-300 max-h-0">
              <div className="flex flex-col">
                <a
                  href="/digital-commerce"
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  Digital Commerce
                </a>
                <a
                  href="/data-analytics"
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  Data Analytics
                </a>
                <a
                  href="/mobile-app"
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  Mobile Applications
                </a>
                <a
                  href="/ai-ml"
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  AI & ML
                </a>
                <a
                  href="/enterprise-software"
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  Enterprise Software
                </a>
                <a
                  href="/qa-testing"
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  QA & Testing
                </a>
                <a
                  href="/cloud-modernization"
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  Cloud Modernization
                </a>
                <a
                  href="/product-engineering"
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  Product Engineering
                </a>
                <a
                  href="/dp-automation"
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  Digital Process Automation
                </a>
                <a
                  href="/digital-experience"
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  Digital Experience
                </a>
                <a
                  href="/digital-marketing"
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  Digital Marketing
                </a>
              </div>
            </div>
          </div>
          <a
            href="/industry"
            className="flex border-t py-4 px-6"
          >
            <h3 className="text-base md:text-md font-bold">Industry</h3>
          </a>
          <a
            href="/case-studies"
            className="flex border-t py-4 px-6"
          >
            <h3 className="text-base md:text-md font-bold">Case Studies</h3>
          </a>
          <div className="open_mob_sub_menu">
            <div className="open_mob_sub_menu_title flex items-center justify-between border-t py-4 px-6" data-index="2">
              <h3 className="open_mob_sub_menu_h3 text-base md:text-md font-bold text-black">
                Insights
              </h3>
              <SubMenuChevron />
            </div>
            <div className="open_mob_sub_menu_list overflow-hidden bg-gray-100 transition-all duration-300 max-h-0">
              <div className="flex flex-col">
                <a
                  href="/blogs"
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  Blogs
                </a>
                <a
                  href=" "
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  Podcasts
                </a>
                <a
                  href=" "
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  Webinars
                </a>
                <a
                  href="/partners"
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  Partners
                </a>
                <a
                  href="/careers"
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  Careers
                </a>
                <a
                  href="/life-at-valoriz"
                  className="border-b last:border-b-0 px-8 py-4"
                >
                  Life at Valoriz
                </a>
              </div>
            </div>
          </div>
          <a
            href="/about"
            className="flex border-t py-4 px-6"
          >
            <h3 className="text-base md:text-md font-bold">About Us</h3>
          </a>
          <a
            href="/products"
            className="flex border-t py-4 px-6"
          >
            <h3 className="text-base md:text-md font-bold">Products</h3>
          </a>
        </div>
      </div>
      <div className="mt-auto p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
        <Button className="w-full" >
          <a href="/contact">Contact Us</a>
        </Button>
      </div>
    </div>
  )
}

export default HeaderSm;