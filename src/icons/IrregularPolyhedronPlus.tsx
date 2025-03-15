import * as React from "react";
import type { SVGProps } from "react";
const SvgIrregularPolyhedronPlus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#irregular-polyhedron-plus_svg__a)"
    >
      <path d="m18.002 12 1.752-6.13a1 1 0 0 0-.592-1.205L12.88 2.162a2.46 2.46 0 0 0-1.756 0L4.842 4.665a1 1 0 0 0-.592 1.204L6.002 12 4.25 18.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l.22-.088" />
      <path d="m4.5 5.5 6.622 2.33a2.35 2.35 0 0 0 1.756 0L19.5 5.5M6 12l5.21 1.862a2.34 2.34 0 0 0 1.58 0L18 12M12 22V8M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="irregular-polyhedron-plus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIrregularPolyhedronPlus;
