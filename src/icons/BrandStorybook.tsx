import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandStorybook = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-storybook_svg__a)"
    >
      <path d="m5 4 .5 16.5L19 21V3z" />
      <path d="M9 14.999c.6 1.5 1.639 2 3.283 2H12c1.8 0 3-.974 3-2.435 0-1.194-.831-1.799-2.147-2.333l-1.975-.802C9.728 10.962 9 10.007 9 8.962c0-.97.899-1.786 2.087-1.893l.613-.055c1.528-.138 3 .762 3.3 1.985M16 3.5v1" />
    </g>
    <defs>
      <clipPath id="brand-storybook_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandStorybook;
