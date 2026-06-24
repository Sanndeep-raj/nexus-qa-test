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

export interface DomainListingProps {
  items: string[] | { name: string }[];
}

export function DomainListing({ items }: DomainListingProps) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return items.map((each, idx) => {
    const label = typeof each === "string" ? each : each.name;
    return (
      <div className="flex items-center gap-1" key={`${label}-${idx}`}>
        <span className="w-1 h-1 bg-primary rounded-full block"></span>
        <p className="text-xs font-medium leading-4">{label}</p>
      </div>
    );
  });
}

export default DomainListing;
