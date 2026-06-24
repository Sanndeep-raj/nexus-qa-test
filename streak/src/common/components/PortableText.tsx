/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author
 * Anagha Chandrababu
 */

type PTChild = {
  text?: string;
  marks?: string[];
};

type PTMarkDef = {
  _key: string;
  href?: string;
  color?: { hex: string };
};

type PTBlock = {
  _type: string;
  style?: string;
  children?: PTChild[];
  markDefs?: PTMarkDef[];
  listItem?: "bullet" | "number";
};

type PortableTextValue = PTBlock[];

function renderPortableText(value: PortableTextValue = []): string {
  if (!Array.isArray(value)) return "";

  return value
    .map((block: PTBlock) => {
      if (block._type === "block") {
        let html = "";

        if (Array.isArray(block.children)) {
          html = block.children
            .map((child: PTChild) => {
              let text = child.text || "";

              if (child.marks && child.marks.length > 0 && block.markDefs) {
                child.marks.forEach((mark: string) => {
                  const def = block.markDefs!.find((m) => m._key === mark);

                  if (def?.href) {
                    text = `<a href="${def.href}" target="_blank" class="underline">${text}</a>`;
                  }

                  if (def?.color?.hex) {
                    text = `<span style="color:${def.color.hex}">${text}</span>`;
                  }

                  if (mark === "strong") {
                    text = `<strong>${text}</strong>`;
                  }

                  if (mark === "em") {
                    text = `<em>${text}</em>`;
                  }
                });
              }

              return text;
            })
            .join("");
        }

        switch (block.style) {
          case "h1":
            return `<h1 class="pt-block-heading">${html}</h1>`;
          case "h2":
            return `<h2 class="pt-block-heading">${html}</h2>`;
          case "h3":
            return `<h3 class="pt-block-heading">${html}</h3>`;
          default:
            return `<p class="pt-block-p">${html}</p>`;
        }
      }

      if (block.listItem === "bullet") {
        return `<ul class="pt-list"><li>${block.children?.map((c) => c.text).join("")}</li></ul>`;
      }
      if (block.listItem === "number") {
        return `<ol class="pt-list-number"><li>${block.children?.map((c) => c.text).join("")}</li></ol>`;
      }

      return "";
    })
    .join("");
}

export default renderPortableText;
