import * as React from "react";
import type { SVGProps } from "react";
const SvgHelmet = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#helmet_svg__a)"
    >
      <path d="M12 4a9 9 0 0 1 5.655 16H6.343A9 9 0 0 1 12 4" />
      <path d="M20.002 9h-8.8a1 1 0 0 0-.968 1.246q.76 3 3.268 4.254 3 1.5 7 1.5" />
    </g>
    <defs>
      <clipPath id="helmet_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHelmet;
