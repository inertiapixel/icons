import * as React from "react";
import type { SVGProps } from "react";
const SvgFileTypeXml = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-type-xml_svg__a)"
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M4 15l4 6M4 21l4-6M19 15v6h3M11 21v-6l2.5 3 2.5-3v6" />
    </g>
    <defs>
      <clipPath id="file-type-xml_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileTypeXml;
