/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Vishakh B S
 */
import type { FC, ReactNode } from "react";
import React from "react";

type MarkDef = {
  _key: string;
  _type: string;
  href?: string;
  openInNewTab?: boolean;
  color?: { hex: string };
};

type PortableDescriptionBlock = {
  _key: string;
  _type: string;
  style?: string;
  listItem?: "bullet" | "number";
  level?: number;
  markDefs?: MarkDef[];
  children?: Array<{
    _key: string;
    _type: string;
    text: string;
    marks?: string[];
  }>;
};

interface PortableDescriptionProps {
  value: PortableDescriptionBlock[];
}

/**
 * Resolve text marks (link, textColor)
 */
const renderMarks = (
  text: string,
  marks: string[] = [],
  markDefs: MarkDef[] = []
): ReactNode => {
  if (!marks.length) return text;

  return marks.reduce<ReactNode>((acc, mark) => {
    const def = markDefs.find((m) => m._key === mark);

    switch (def?._type) {
      case "link":
        return (
          <a
            key={mark}
            href={def.href ?? "#"}
            target={def.openInNewTab ? "_blank" : "_self"}
            rel={def.openInNewTab ? "noopener noreferrer" : undefined}
            className="link hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 transition"
          >
            {acc}
          </a>
        );
      case "textColor":
        return (
          <span key={mark} style={{ color: def.color?.hex || "#000" }}>
            {acc}
          </span>
        );
      default:
        return acc;
    }
  }, text);
};

/**
 * Render a single block (paragraph, list, etc.)
 */
const renderBlock = (block: PortableDescriptionBlock): ReactNode => {
  if (!block?.children?.length) return null;

  const markDefs = block.markDefs ?? [];
  const children = block.children.map((child) =>
    renderMarks(child.text, child.marks, markDefs)
  );

  const rawText = block.children.map((c) => c.text).join("");

  // CASE 1: Handle List Items (real bullet/number lists)
  if (block.listItem === "bullet") {
    return (
      <li key={block._key} className="list-disc ml-6">
        {children}
        <br />
        <br />
      </li>
    );
  }

  if (block.listItem === "number") {
    return (
      <li key={block._key} className="list-decimal ml-6">
        {children}
        <br />
        <br />
      </li>
    );
  }

  // CASE 2: Multi-line paragraph with hyphen-based lines ("- text")
  if ((block.style === "normal" || !block.style) && rawText.includes("\n")) {
    const html = rawText
      .replace(/\n\s*\n/g, "<br /><br />")
      .replace(/\n/g, "<br />");

    return (
      <p
        key={block._key}
        className="mt-2"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  /**
   * CASE 3: Normal single-line paragraph
   */
  if (block.style === "normal" || !block.style) {
    const textOnly = block.children?.[0]?.text;
    if (typeof textOnly === "string" && textOnly.trim() === "") {
      return <br key={block._key} />;
    }
    return (
      <p key={block._key} className="mt-2">
        {children}
      </p>
    );
  }

  /**
   * CASE 4: Headings or custom text styles
   */
  const HeadingTag = block.style?.startsWith("h") ? block.style : "p";
  return React.createElement(
    HeadingTag,
    { key: block._key, className: "mt-2 font-semibold" },
    children
  );
};

/**
 * Main PortableDescription component
 */
const PortableDescription: FC<PortableDescriptionProps> = ({ value }) => {
  if (!value?.length) return null;

  const elements: ReactNode[] = [];
  let listBuffer: ReactNode[] = [];
  let currentListType: "bullet" | "number" | null = null;

  value.forEach((block) => {
    if (block.listItem) {
      if (currentListType && currentListType !== block.listItem) {
        // flush previous list
        elements.push(
          currentListType === "bullet" ? (
            <ul key={`ul-${block._key}`} className="my-2 list-disc pl-6">
              {listBuffer}
            </ul>
          ) : (
            <ol key={`ol-${block._key}`} className="my-2 list-decimal pl-6">
              {listBuffer}
            </ol>
          )
        );
        listBuffer = [];
      }
      currentListType = block.listItem;
      listBuffer.push(renderBlock(block));
    } else {
      if (listBuffer.length) {
        elements.push(
          currentListType === "bullet" ? (
            <ul key={`ul-${block._key}`} className="my-2 list-disc pl-6">
              {listBuffer}
            </ul>
          ) : (
            <ol key={`ol-${block._key}`} className="my-2 list-decimal pl-6">
              {listBuffer}
            </ol>
          )
        );
        listBuffer = [];
        currentListType = null;
      }
      elements.push(renderBlock(block));
    }
  });

  if (listBuffer.length) {
    elements.push(
      currentListType === "bullet" ? (
        <ul key="ul-final" className="my-2 list-disc pl-6">
          {listBuffer}
        </ul>
      ) : (
        <ol key="ol-final" className="my-2 list-decimal pl-6">
          {listBuffer}
        </ol>
      )
    );
  }

  return <div>{elements}</div>;
};

export default PortableDescription;
