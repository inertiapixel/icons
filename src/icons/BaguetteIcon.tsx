import * as React from "react";
import type { SVGProps } from "react";
const SvgBaguetteIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#baguette-icon_svg__a)"
    >
      <path d="m5.628 11.283 5.645-5.637c2.665-2.663 5.924-3.747 8.663-1.205l.188.181a2.987 2.987 0 0 1 0 4.228L8.836 20.124a3 3 0 0 1-4.089.135l-.143-.135C1.876 17.4 2.9 14.007 5.628 11.284M9.5 7.5 11 11M6.5 10.5 8 14M12.5 4.5 14 8" />
    </g>
    <defs>
      <clipPath id="baguette-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBaguetteIcon;
