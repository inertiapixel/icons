import * as React from "react";
import type { SVGProps } from "react";
const SvgPumpkinScary = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#pumpkin-scary_svg__a)"
    >
      <path d="m9 15 1.5 1 1.5-1 1.5 1 1.5-1M10 11h.01M14 11h.01" />
      <path d="M17 6.082c2.609.588 3.627 4.162 2.723 7.983s-2.75 6.44-5.36 5.853a3.4 3.4 0 0 1-.773-.279c-.497.236-1.04.36-1.59.361-.556 0-1.09-.127-1.59-.362q-.369.189-.774.28c-2.61.588-4.456-2.033-5.36-5.853S4.39 6.67 7 6.082c1.085-.244 1.575.066 2.585.787C10.3 6.315 11.125 6 12 6c.876 0 1.699.315 2.415.87 1.01-.722 1.5-1.032 2.585-.788" />
      <path d="M12 6c0-1.226.693-2.346 1.789-2.894L14 3" />
    </g>
    <defs>
      <clipPath id="pumpkin-scary_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPumpkinScary;
