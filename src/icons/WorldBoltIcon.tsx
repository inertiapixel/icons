import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldBoltIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-bolt-icon_svg__a)"
    >
      <path d="M20.985 12.52a9 9 0 1 0-7.52 8.36M3.602 9h16.8M3.602 15h10.9" />
      <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3c2.313 3.706 3.07 7.856 2.27 12M19 16l-2 3h4l-2 3" />
    </g>
    <defs>
      <clipPath id="world-bolt-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldBoltIcon;
