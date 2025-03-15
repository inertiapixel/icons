import * as React from "react";
import type { SVGProps } from "react";
const SvgSeedingOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#seeding-off_svg__a)"
    >
      <path d="M11.412 7.407a6.03 6.03 0 0 0-2.82-2.82M4 4H3v2a6 6 0 0 0 6 6h3M12 14c0-.588.085-1.173.255-1.736m1.51-2.514A5.98 5.98 0 0 1 18 8h3v1c0 2.158-1.14 4.05-2.85 5.107M15 15h-3M12 20v-8M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="seeding-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSeedingOff;
