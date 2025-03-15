import * as React from "react";
import type { SVGProps } from "react";
const SvgTelescopeOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#telescope-off_svg__a)"
    >
      <path d="m6 21 6-5 6 5M12 13v8M8.238 8.263l-4.183 2.51c-1.02.614-1.357 1.899-.76 2.907l.165.28c.52.88 1.624 1.265 2.605.91l6.457-2.34m2.907-1.055 4.878-1.77a1.023 1.023 0 0 0 .565-1.456l-2.62-4.705a1.087 1.087 0 0 0-1.447-.42l-.056.032-6.016 3.61M14 5l3 5.5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="telescope-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTelescopeOff;
