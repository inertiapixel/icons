import React from "react";

export const MoodCheckIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68298)">
<path d="M20.925 13.163C21.0908 11.8935 20.9837 10.6033 20.611 9.37851C20.2383 8.15371 19.6085 7.02255 18.7637 6.06059C17.919 5.09862 16.8786 4.32801 15.7122 3.80022C14.5458 3.27242 13.2802 2.99961 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 10H9.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10H15.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 15C10.158 15.64 11.06 16 12 16C12.94 16 13.842 15.64 14.5 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 19L17 21L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68298">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
