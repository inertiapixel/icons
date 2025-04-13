import React from "react";

export const CodeMinusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78188)">
<path d="M9 12H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 19C5.46957 19 4.96086 18.7893 4.58579 18.4142C4.21071 18.0391 4 17.5304 4 17V13L3 12L4 11V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 19C18.5304 19 19.0391 18.7893 19.4142 18.4142C19.7893 18.0391 20 17.5304 20 17V13L21 12L20 11V7C20 6.46957 19.7893 5.96086 19.4142 5.58579C19.0391 5.21071 18.5304 5 18 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78188">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
