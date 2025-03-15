import * as React from "react";
import type { SVGProps } from "react";
const SvgUmbrellaOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#umbrella-off_svg__a)"
    >
      <path d="M12 11.999H4c0-2.21.895-4.208 2.342-5.656m2.382-1.645A8 8 0 0 1 20 11.998h-4M12 12v6a2 2 0 0 0 4 0M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="umbrella-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUmbrellaOff;
