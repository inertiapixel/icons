import * as React from "react";
import type { SVGProps } from "react";
const SvgMedal2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#medal-2-icon_svg__a)"
    >
      <path d="M9 3h6l3 7-6 2-6-2zM12 12 9 3M15 11l-3-8M12 19.5 9 21l.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2L15 21z" />
    </g>
    <defs>
      <clipPath id="medal-2-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMedal2Icon;
