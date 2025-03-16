import * as React from "react";
import type { SVGProps } from "react";
const SvgPresentationOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#presentation-off-icon_svg__a)"
    >
      <path d="M3 4h1m4 0h13M4 4v10a2 2 0 0 0 2 2h10m3.42-.592c.359-.362.58-.859.58-1.408V4M12 16v4M9 20h6M8 12l2-2m4 0 2-2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="presentation-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPresentationOffIcon;
