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

"use client";

interface RunningWordCanvasProps {
  words: string[];
  classNames: string[];
  timeOut?: number;
}

const RunningWordCanvas = ({
  words,
  classNames,
  timeOut = 1000,
}: RunningWordCanvasProps) => {
  const totalDuration = words.length * timeOut;

  return (
    <span
      className="
        flex flex-col items-start gap-2
        md:flex-row md:justify-center md:items-baseline md:gap-8
      "
    >
      {words.map((word, i) => (
        <span key={i} className="rwc-word">
          <span className="rwc-base">{word}</span>
          <span
            className={`rwc-gradient rwc-animate ${classNames[i]}`}
            style={{
              animationDuration: `${totalDuration}ms`,
              animationDelay: `${i * timeOut}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
};

export default RunningWordCanvas;
