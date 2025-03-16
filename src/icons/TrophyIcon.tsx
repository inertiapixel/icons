import * as React from "react";
import type { SVGProps } from "react";
const SvgTrophyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#trophy-icon_svg__a)">
      <path
        fill="currentColor"
        d="M16.999 3a1 1 0 0 1 .993.883l.007.117v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993l-.117.007h-8a1 1 0 0 1-.117-1.993L7.999 20h3v-2.083a6 6 0 0 1-4.996-5.692L5.999 12v-.171a3 3 0 0 1-3.996-2.653L2 9l.005-.176A3 3 0 0 1 6 6.17L5.999 4a1 1 0 0 1 1-1zm-12 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      />
    </g>
    <defs>
      <clipPath id="trophy-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrophyIcon;
