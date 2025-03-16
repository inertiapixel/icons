import * as React from "react";
import type { SVGProps } from "react";
const SvgWoodIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wood-icon_svg__a)"
    >
      <path d="M6 5.5c0 .663.632 1.299 1.757 1.768S10.41 8 12 8s3.117-.263 4.243-.732C17.368 6.798 18 6.163 18 5.5s-.632-1.299-1.757-1.768S13.59 3 12 3s-3.117.263-4.243.732C6.632 4.202 6 4.837 6 5.5" />
      <path d="M18 5.5v4.626a1.415 1.415 0 0 1 1.684 2.18l-.097.108L18 14v4c0 1.61-2.54 2.925-5.725 3H12c-3.314 0-6-1.343-6-3v-2l-1.586-1.586A1.414 1.414 0 0 1 6 12.127V5.5M10 12.5V14M14 16v1" />
    </g>
    <defs>
      <clipPath id="wood-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWoodIcon;
