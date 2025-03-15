import * as React from "react";
import type { SVGProps } from "react";
const SvgBucketDroplet = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bucket-droplet_svg__a)"
    >
      <path d="m5 16 1.464 1.638a2 2 0 1 1-3.015.099zM13.737 9.737c2.3-2.3 3.23-5.095 2.081-6.245s-3.945-.217-6.244 2.082-3.23 5.095-2.082 6.244c1.15 1.15 3.946.218 6.245-2.08" />
      <path d="M7.492 11.818c.362.362.768.676 1.208.934l6.895 4.047c1.078.557 2.255-.075 3.692-1.512s2.07-2.614 1.512-3.692q-.557-1.078-4.047-6.895a6 6 0 0 0-.934-1.208" />
    </g>
    <defs>
      <clipPath id="bucket-droplet_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBucketDroplet;
