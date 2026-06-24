/* eslint-disable import/no-extraneous-dependencies */
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


export interface PortableTextMark {
  _type: string;
  [key: string]: any;
}

export interface PortableTextBlock {
  _key: string;
  _type: "block" | string;
  style?: string;
  children?: PortableTextSpan[];
  markDefs?: PortableTextMark[];
  listItem?: "bullet" | "number";
  level?: number;
  [key: string]: any;
}

export interface PortableTextSpan {
  _key: string;
  _type: "span";
  text: string;
  marks?: string[];
}

export interface PortableTextProps {
  value: PortableTextBlock[];
}


interface PortableTextReactComponents {
  marks?: {
    [key: string]: (props: any) => React.ReactNode;
  };
  block?: {
    [key: string]: (props: any) => React.ReactNode;
  };
  list?: {
    bullet?: (props: any) => React.ReactNode;
    number?: (props: any) => React.ReactNode;
  };
}

const components: Partial<PortableTextReactComponents> = {
  marks: {
    link: ({ children, value }: { children: any; value: any }) => (
      <a
        className="link"
        href={value?.href ?? "#"}
        target={value?.openInNewTab ? "_blank" : "_self"}
        rel={value?.openInNewTab ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),

    textColor: ({ children, value }: { children: any; value: any }) => {
      const color = value?.color?.hex || "#000";
      return <span style={{ color }}>{children}</span>;
    },
  },

  block: {
    normal: ({ children }: { children: any }) => {
      const textOnly = children?.[0];
      if (typeof textOnly === "string" && textOnly.trim() === "") {
        return <br />;
      }
      return <p className="mt-2">{children}</p>;
    },

    bullet: ({ children }: { children: any }) => (
      <li className="list-disc ml-6">{children}</li>
    ),

    number: ({ children }: { children: any }) => (
      <li className="list-decimal ml-6">{children}</li>
    ),
  },

  list: {
    bullet: ({ children }: { children: any }) => (
      <ul className="my-2 list-disc pl-6">{children}</ul>
    ),
    number: ({ children }: { children: any }) => (
      <ol className="my-2 list-decimal pl-6">{children}</ol>
    ),
  },
};
const PortableTextRenderer = ({
  value,
}: {
  value: PortableTextBlock[];
}) => {
  return (
    <>
      {value?.map((block) => {
        if (block.listItem) {
          const listType = block.listItem === "bullet" ? "bullet" : "number";
          return components.block?.[listType]?.({
            children: block.children?.map((span) => span.text),
          });
        }

        if (block._type === "block") {
          return components.block?.normal?.({
            children: block.children?.map((span) => span.text),
          });
        }

        return null;
      })}
    </>
  );
};

const PortableText: React.FC<PortableTextProps> = ({ value }) => {
  return <PortableTextRenderer value={value} />;
};

export default PortableText;
