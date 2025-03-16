import * as React from "react";
import type { SVGProps } from "react";
const SvgSofaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sofa-icon_svg__a)"
    >
      <path d="M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 0 1 4 0v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5a2 2 0 0 1 2-2" />
      <path d="M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3M12 5v9" />
    </g>
    <defs>
      <clipPath id="sofa-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSofaIcon;
