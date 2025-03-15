import * as React from "react";
import type { SVGProps } from "react";
const SvgCreativeCommonsNc = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#creative-commons-nc_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M15 9h-4.5a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 1 1 0 3H9M12 7v2M12 15v2M6 6l3 3M15 15l3 3" />
    </g>
    <defs>
      <clipPath id="creative-commons-nc_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCreativeCommonsNc;
