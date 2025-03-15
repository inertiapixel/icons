import * as React from "react";
import type { SVGProps } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cloud_svg__a)">
      <path
        fill="currentColor"
        d="M10.04 4.305c2.195-.667 4.615-.224 6.36 1.176 1.386 1.108 2.188 2.686 2.252 4.34l.003.212.091.003c2.3.107 4.143 1.96 4.25 4.27l.004.21c0 2.408-1.885 4.373-4.255 4.483l-.21.005H6.657l-.222-.008c-2.94-.11-5.317-2.4-5.43-5.263L1 13.517C1 10.77 3.08 8.507 5.784 8.1l.114-.016.07-.181c.663-1.62 2.056-2.906 3.829-3.518l.244-.08z"
      />
    </g>
    <defs>
      <clipPath id="cloud_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCloud;
