import React from "react";

export const InputAiIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71290)">
<path d="M20 11V9C20 8.46957 19.7893 7.96086 19.4142 7.58579C19.0391 7.21071 18.5304 7 18 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 21V17C14 16.4696 14.2107 15.9609 14.5858 15.5858C14.9609 15.2107 15.4696 15 16 15C16.5304 15 17.0391 15.2107 17.4142 15.5858C17.7893 15.9609 18 16.4696 18 17V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 19H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 15V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71290">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
