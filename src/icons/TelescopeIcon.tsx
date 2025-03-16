import * as React from "react";
import type { SVGProps } from "react";
const SvgTelescopeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#telescope-icon_svg__a)"
    >
      <path d="m6 21 6-5 6 5M12 13v8M3.294 13.68l.166.28c.52.88 1.624 1.265 2.605.91l14.242-5.165a1.023 1.023 0 0 0 .565-1.456l-2.62-4.705a1.087 1.087 0 0 0-1.447-.42l-.056.032-12.694 7.618c-1.02.614-1.357 1.898-.76 2.906zM14 5l3 5.5" />
    </g>
    <defs>
      <clipPath id="telescope-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTelescopeIcon;
