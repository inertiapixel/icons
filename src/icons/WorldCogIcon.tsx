import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldCogIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-cog-icon_svg__a)"
    >
      <path d="M21 12a9 9 0 1 0-8.979 9M3.602 9h16.8M3.602 15h8.9" />
      <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 2.522 10.376M17 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M19 15.5V17M19 21v1.5M22.033 17.25l-1.299.75M17.269 20l-1.3.75M15.969 17.25l1.3.75M20.734 20l1.3.75" />
    </g>
    <defs>
      <clipPath id="world-cog-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldCogIcon;
