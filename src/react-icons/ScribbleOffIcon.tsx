import React from "react";

export const ScribbleOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64473)">
<path d="M3 15C5 18 7 19 10 19C11.95 19 14.324 17.732 15.746 15.744M16.927 12.932C16.9757 12.6237 17.0001 12.3121 17 12C17 8 14 5 11 5C10.358 5 9.761 5.069 9.22 5.201M6.728 6.716C6.258 7.333 6 8.102 6 9C6 11.5 8 14 12 14C12.597 14 13.203 13.945 13.808 13.844M16.91 12.923C19.145 11.97 21.062 10.5 22 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64473">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
