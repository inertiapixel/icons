import * as React from "react";
import type { SVGProps } from "react";
const SvgDropletBolt = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#droplet-bolt_svg__a)"
    >
      <path d="M18.628 12.078a6.7 6.7 0 0 0-.564-1.2l-4.89-7.26c-.42-.624-1.287-.802-1.936-.396a1.4 1.4 0 0 0-.41.397l-4.893 7.26c-1.695 2.838-1.035 6.44 1.567 8.546 1.7 1.375 3.906 1.852 5.958 1.43M19 16l-2 3h4l-2 3" />
    </g>
    <defs>
      <clipPath id="droplet-bolt_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDropletBolt;
