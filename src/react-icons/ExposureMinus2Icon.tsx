import React from "react";

export const ExposureMinus2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74737)">
<path d="M12 9C12 7.93913 12.4214 6.92172 13.1716 6.17157C13.9217 5.42143 14.9391 5 16 5C17.0609 5 18.0783 5.42143 18.8284 6.17157C19.5786 6.92172 20 7.93913 20 9C20 10.098 19.436 11.025 18.841 11.815L12 19H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74737">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
