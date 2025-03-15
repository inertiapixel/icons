import * as React from "react";
import type { SVGProps } from "react";
const SvgDental = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#dental_svg__a)"
    >
      <path d="M12 5.5C10.926 4.914 9.417 4 8 4 5.9 4 4 5.247 4 9c0 4.899 1.056 8.41 2.671 10.537.573.756 1.97.521 2.567-.236q.597-.758 1.262-2.801c.292-.771.892-1.504 1.5-1.5.602 0 1.21.737 1.5 1.5q.665 2.043 1.262 2.8c.597.759 2 .993 2.567.237C18.944 17.41 20 13.9 20 9c0-3.74-1.908-5-4-5-1.423 0-2.92.911-4 1.5M12 5.5 15 7" />
    </g>
    <defs>
      <clipPath id="dental_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDental;
