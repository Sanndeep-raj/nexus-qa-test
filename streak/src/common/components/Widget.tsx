/* eslint-disable max-len */
/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Ram S Madhav
 */

import { hasArrayElements } from "utils/commonUtils";
import BlogFeatures from "widgets/BlogFeatures";
import ImageWithText from "widgets/ImageWithText";
import TextSection from "widgets/TextSection";
import { Script } from "streak/components";

type WidgetType = "imageWithText" | "textSection" | "blogFeatures";

interface WidgetItem {
  _type: WidgetType;
  _key: string;
  [key: string]: any;
}

const WIDGETS_MAP: Record<WidgetType, React.ComponentType<any>> = {
  imageWithText: ImageWithText,
  textSection: TextSection,
  blogFeatures: BlogFeatures,
};

interface WidgetProps {
  widgets?: WidgetItem[];
}

const Widget = ({ widgets }: WidgetProps) => {
  return (
    hasArrayElements(widgets) &&
    widgets!.map((widget, index) => {
      const Component = WIDGETS_MAP[widget._type];

      return (
        Component && (
          <section
            key={`W${widget._key}`}
            id={widget._key}
            className="scroll-mt-[var(--header-height)]"
          >
            <Component
              key={`W${widget._key}`}
              contents={widget}
              index={index}
              isLastWidget={index + 1 === widgets!.length}
            />
            <Script id="Widget">
              {() => {
                const header = document.getElementById("header")!;

                const setHeight = () => {
                  document.documentElement.style.setProperty(
                    "--header-height",
                    header.offsetHeight + "px"
                  );
                };
                setHeight();
                window.addEventListener("resize", setHeight);
              }}

            </Script>
          </section>
        )
      );
    })
  );
};

export default Widget;
