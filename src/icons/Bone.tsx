import * as React from "react";
import type { SVGProps } from "react";
const SvgBone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bone_svg__a)">
      <path
        fill="currentColor"
        d="M15 2a4 4 0 0 1 3.88 3.03l.017.072.08.019a4 4 0 0 1 2.83 2.65l.057.193a4 4 0 0 1-5.847 4.51l-.047-.029-3.525 3.525.042.07a4 4 0 0 1 .117 3.696l-.102.197a4 4 0 0 1-4.386 1.969 3.99 3.99 0 0 1-2.982-2.904l-.023-.095-.138-.033a4 4 0 0 1-2.82-2.783l-.05-.199a4 4 0 0 1 5.865-4.368l.068.04 3.524-3.524-.036-.061a4 4 0 0 1-.293-3.295l.079-.205a4 4 0 0 1 3.695-2.47l-.14.004.02-.003z"
      />
    </g>
    <defs>
      <clipPath id="bone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBone;
