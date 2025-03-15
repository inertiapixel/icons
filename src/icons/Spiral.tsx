import * as React from "react";
import type { SVGProps } from "react";
const SvgSpiral = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#spiral_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 12.057a1.9 1.9 0 0 0 .614.743c1.06.713 2.472.112 3.043-.92.839-1.512-.022-3.367-1.525-4.08-2-.95-4.371.155-5.24 2.087-1.095 2.432.29 5.248 2.71 6.246 2.93 1.208 6.283-.418 7.438-3.255 1.36-3.343-.557-7.134-3.896-8.41-3.855-1.474-8.2.68-9.636 4.422-1.63 4.253.823 9.024 5.082 10.576 4.778 1.74 10.118-.941 11.833-5.59.336-.902.53-1.851.577-2.813"
      />
    </g>
    <defs>
      <clipPath id="spiral_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpiral;
