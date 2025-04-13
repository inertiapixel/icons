import React from "react";

export const EraserIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74816)">
<path d="M19.0008 20.0008H8.50079L4.29079 15.7008C4.10454 15.5134 4 15.26 4 14.9958C4 14.7316 4.10454 14.4782 4.29079 14.2908L14.2908 4.29079C14.4782 4.10454 14.7316 4 14.9958 4C15.26 4 15.5134 4.10454 15.7008 4.29079L20.7008 9.29079C20.887 9.47815 20.9916 9.73161 20.9916 9.99579C20.9916 10.26 20.887 10.5134 20.7008 10.7008L11.5008 20.0008"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.9992 13.3L11.6992 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74816">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
