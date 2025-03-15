import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudComputing = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cloud-computing_svg__a)"
    >
      <path d="M6.657 16C4.085 16 2 13.993 2 11.517s2.085-4.482 4.657-4.482c.393-1.762 1.794-3.2 3.675-3.773 1.88-.572 3.956-.193 5.444 1 1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486s-1.551 3.487-3.465 3.487H6.657M12 16v5" />
      <path d="M16 16v4a1 1 0 0 0 1 1h4M8 16v4a1 1 0 0 1-1 1H3" />
    </g>
    <defs>
      <clipPath id="cloud-computing_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCloudComputing;
