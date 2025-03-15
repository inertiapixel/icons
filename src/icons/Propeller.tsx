import * as React from "react";
import type { SVGProps } from "react";
const SvgPropeller = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#propeller_svg__a)"
    >
      <path d="M9 13a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M14.167 10.5q1.083-2.307 1.303-4.514C15.69 4.356 14.708 3 12 3S8.31 4.357 8.53 5.986q.22 2.207 1.303 4.514M13.168 16.752q1.456 2.092 3.257 3.386c1.3 1 2.967.833 4.321-1.512s.67-3.874-.85-4.498q-2.021-.913-4.562-1.128M8.662 13q-2.54.215-4.56 1.128c-1.522.623-2.206 2.153-.852 4.498s3.02 2.517 4.321 1.512q1.8-1.294 3.258-3.386" />
    </g>
    <defs>
      <clipPath id="propeller_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPropeller;
