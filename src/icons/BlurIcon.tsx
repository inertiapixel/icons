import * as React from "react";
import type { SVGProps } from "react";
const SvgBlurIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#blur-icon_svg__a)"
    >
      <path d="M11.998 21a9 9 0 1 0 .013-18 9 9 0 0 0-.013 18M12 3v17M12 12h9M12 9h8M12 6h6M12 18h6M12 15h8" />
    </g>
    <defs>
      <clipPath id="blur-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBlurIcon;
