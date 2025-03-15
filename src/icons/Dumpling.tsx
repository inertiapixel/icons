import * as React from "react";
import type { SVGProps } from "react";
const SvgDumpling = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#dumpling_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.532 5.534a2.53 2.53 0 0 1 2.56-.623 2.532 2.532 0 0 1 4.604-.717A2.532 2.532 0 0 1 17.37 5.38a2.53 2.53 0 0 1 2.844.51l.358.359c1.384 1.385-.7 5.713-4.655 9.669-3.956 3.955-8.284 6.04-9.669 4.655l-.358-.358-.114-.122a2.53 2.53 0 0 1-.398-2.724 2.531 2.531 0 0 1-1.186-4.675 2.533 2.533 0 0 1 .718-4.603 2.53 2.53 0 0 1 .622-2.558"
      />
    </g>
    <defs>
      <clipPath id="dumpling_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDumpling;
