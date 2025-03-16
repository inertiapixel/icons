import * as React from "react";
import type { SVGProps } from "react";
const SvgApertureOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#aperture-off-icon_svg__a)"
    >
      <path d="M3.602 15h10.55M5.64 5.632A9 9 0 0 0 18.36 18.37m1.68-2.318A9 9 0 0 0 7.966 3.954M7.395 7.535l2.416 7.438M17.031 4.637 12.18 8.163M9.845 9.858l-1.349.98M20.558 14.51l-8.535-6.201M12.258 20.917l2.123-6.533m.984-3.028.154-.473M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="aperture-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgApertureOffIcon;
