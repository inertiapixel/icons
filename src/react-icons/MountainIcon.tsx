import React from "react";

export const MountainIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67951)">
<path d="M3 19.9986H21L14.079 5.38657C13.8927 4.99281 13.5984 4.66006 13.2303 4.42704C12.8623 4.19402 12.4356 4.07031 12 4.07031C11.5644 4.07031 11.1377 4.19402 10.7697 4.42704C10.4016 4.66006 10.1073 4.99281 9.921 5.38657L3 19.9986Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 11L9.5 13.5L12 11L14 14L16.5 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67951">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
