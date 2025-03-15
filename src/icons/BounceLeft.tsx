import * as React from "react";
import type { SVGProps } from "react";
const SvgBounceLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#bounce-left_svg__a)">
      <path d="M8.485 11.142a1 1 0 0 1 1.371.343c1.045 1.74 1.83 3.443 2.392 5.237l.172.581.092-.13c2.093-2.92 4.48-3.653 7.565-2.7l.238.077a1.001 1.001 0 0 1-.632 1.898c-2.932-.978-4.73-.122-6.79 3.998-.433.866-1.72.673-1.88-.283-.46-2.76-1.369-5.145-2.87-7.65a1 1 0 0 1 .342-1.37M6 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
    </g>
    <defs>
      <clipPath id="bounce-left_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBounceLeft;
