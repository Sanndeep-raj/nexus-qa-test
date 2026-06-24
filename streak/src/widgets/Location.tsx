/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Minna Ancy Mathew
 */

import MapBg from "@common/icons/MapBg";

const Location = () => {
  const locations = [
    {
      country: "INDIA",
      city: "Trivandrum",
      image: "/images/contact/tvm.webp",
      address: [
        "L-2, -1 Floor, Thejaswini Building",
        "Technopark",
        "Trivandrum, India",
      ],
    },
    {
      country: "INDIA",
      city: "Kochi",
      image: "/images/contact/kochi.webp",
      address: [
        "3rd Floor, Thapasya Building",
        "Infopark, Phase-1",
        "Kochi, India",
      ],
    },
    {
      country: "UAE",
      city: "Dubai",
      image: "/images/contact/dubai.webp",
      address: [
        "Aspin commercial tower",
        "Sheikh Zayed Road",
        "Dubai, UAE",
      ],
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        {/* Background Map (exact same positioning & size as original) */}
        <div className="absolute top-10 md:top-0 left-[10%] md:left-1/2 -translate-x-1/2 w-[1200px] md:w-full md:max-w-[1440px] h-1/2">
          <MapBg />
        </div>

        <div className="relative z-10 py-12 xl:py-20 xxl:py-26">
            <div className="container">
              <h3 className="text-h4 xl:text-h2">Our Locations</h3>

              <div className="grid md:grid-cols-2">
                <p className="text-xxl mt-4">
                  From our development centers in India to our global outreach
                  in Dubai, we’re always within reach for your tech needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-5 mt-[256px]">
                {locations.map((loc) => (
                  <div key={loc.city}>
                    <img
                      src={loc.image}
                      alt={`${loc.city} office`}
                      width={420}
                      height={113}
                      className="w-full h-auto object-cover"
                    />
                    <p className="text-gray-700 text-md font-medium mt-8">
                      {loc.country}
                    </p>
                    <h4 className="text-h4 font-medium mt-2">{loc.city}</h4>
                    <div>
                      <p className="text-xxl xl:font-medium mt-4 xl:mt-8">
                        {loc.address[0]}
                      </p>
                      {loc.address.slice(1).map((line, i) => (
                        <p key={i} className="text-xxl xl:font-medium">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Location;
