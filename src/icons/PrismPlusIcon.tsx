import * as React from "react";
import type { SVGProps } from "react";
const SvgPrismPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#prism-plus-icon_svg__a)"
    >
      <path d="M12 9v13M13.02 21.655a1.7 1.7 0 0 1-2.04 0L5 17.17a2.5 2.5 0 0 1-1-2V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8" />
      <path d="m4.3 3.3 6.656 5.187a1.7 1.7 0 0 0 2.09 0L19.7 3.3M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="prism-plus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPrismPlusIcon;
