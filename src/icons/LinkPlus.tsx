import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkPlus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#link-plus_svg__a)"
    >
      <path d="m9 15 6-6M11 6l.463-.535a5 5 0 0 1 8.158 1.622 4.99 4.99 0 0 1-1.087 5.45M12.603 18.534a5.07 5.07 0 0 1-7.127 0 4.97 4.97 0 0 1 0-7.071L6 11M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="link-plus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLinkPlus;
