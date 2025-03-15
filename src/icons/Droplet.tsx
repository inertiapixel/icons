import * as React from "react";
import type { SVGProps } from "react";
const SvgDroplet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#droplet_svg__a)">
      <path
        fill="currentColor"
        d="M10.709 2.374c-.282.177-.524.41-.71.686l-4.892 7.26c-1.981 3.314-1.22 7.466 1.767 9.882 2.969 2.402 7.286 2.402 10.254 0 2.987-2.416 3.748-6.57 1.795-9.836l-4.92-7.306c-.721-1.075-2.191-1.376-3.294-.686"
      />
    </g>
    <defs>
      <clipPath id="droplet_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDroplet;
