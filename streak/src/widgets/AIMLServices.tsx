/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Anagha Chandrababu
 */

type ChooseItem = {
  icon: string;
  iconWidth: number;
  iconHeight: number;
  alt: string;
  title: string;
  description: string;
};

interface ChooseSectionProps {
  data: {
    id?: string;
    label: string;
    heading: string;
    description: string;
    items: ChooseItem[];
  };
}

const AIMLServices = (props: ChooseSectionProps) => {
  const { id, label, heading, description, items } = props.data;
  return (
    <section className="border-t border-b py-12 xl:py-20 xxl:py-26" id={id}>
      <div className="container">
        <div className="lg:w-8/12 mb-8">
          <p className="text-xxl xl:text-h4 mb-2">{label}</p>
          <p className="text-h4 xl:text-h2 text-primary whitespace-pre-line">
            {heading}
          </p>
          <p className="text-xxl xl:text-h5 mt-8">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 xl:gap-28 mt-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="max-md:border-b last:border-b-0 max-md:mb-6 last:mb-0 max-md:pb-6 last:pb-0"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center w-[72px] h-[72px] rounded-lg bg-[url(/images/bg/icon-bg.svg)] bg-no-repeat bg-contain">
                  <img
                    src={item.icon}
                    width={item.iconWidth}
                    height={item.iconHeight}
                    alt={item.alt}
                    className="max-w-full"
                  />
                </div>
              </div>

              <div>
                <p className="text-xxl font-medium">{item.title}</p>
                <p className="text-gray-900 mt-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIMLServices;
