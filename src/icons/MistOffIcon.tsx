import * as React from "react";
import type { SVGProps } from "react";
const SvgMistOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mist-off-icon_svg__a)"
    >
      <path d="M12 5h9M3 10h7M18 10h1M5 15h5M14 15h1m4 0h2M3 20h9m4 0h3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="mist-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMistOffIcon;
