import * as React from "react";
import type { SVGProps } from "react";
const SvgBounceRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#bounce-right_svg__a)">
      <path d="M14.143 11.486a1 1 0 0 1 1.714 1.028c-1.502 2.505-2.41 4.89-2.87 7.65-.16.956-1.448 1.15-1.88.283-2.06-4.12-3.859-4.976-6.79-3.998a1.001 1.001 0 0 1-.633-1.898c3.2-1.067 5.656-.373 7.803 2.623l.091.13.011-.04c.522-1.828 1.267-3.55 2.273-5.3zM18 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
    </g>
    <defs>
      <clipPath id="bounce-right_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBounceRight;
