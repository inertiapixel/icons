import React from "react";

export const LetterBSmallIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70698)">
<path d="M12 12C12.5304 12 13.0391 12.2107 13.4142 12.5858C13.7893 12.9609 14 13.4696 14 14C14 14.5304 13.7893 15.0391 13.4142 15.4142C13.0391 15.7893 12.5304 16 12 16H10V8H12C12.5304 8 13.0391 8.21071 13.4142 8.58579C13.7893 8.96086 14 9.46957 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12ZM12 12H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70698">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
