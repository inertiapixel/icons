import * as React from "react";
import type { SVGProps } from "react";
const SvgCreativeCommonsSaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#creative-commons-sa-icon_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M12 16a4 4 0 1 0-4-4v1" />
      <path d="m6 12 2 2 2-2" />
    </g>
    <defs>
      <clipPath id="creative-commons-sa-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCreativeCommonsSaIcon;
