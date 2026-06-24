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

interface DomainListingProps {
  items: string[];
}

const DomainListing: React.FC<DomainListingProps> = ({ items }) => {
  if (!hasArrayElements(items)) return null;

  return (
    <>
      {items.map((each, index) => (
        <div className="flex items-center gap-1" key={`${each}-${index}`}>
          <span className="w-1 h-1 bg-primary rounded-full block"></span>
          <p className="text-xs font-medium leading-4">{each}</p>
        </div>
      ))}
    </>
  );
};

export default DomainListing;
