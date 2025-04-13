import React from "react";

export const MusicCancelIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67859)">
<path d="M3 17C3 17.7956 3.31607 18.5587 3.87868 19.1213C4.44129 19.6839 5.20435 20 6 20C6.79565 20 7.55871 19.6839 8.12132 19.1213C8.68393 18.5587 9 17.7956 9 17C9 16.2044 8.68393 15.4413 8.12132 14.8787C7.55871 14.3161 6.79565 14 6 14C5.20435 14 4.44129 14.3161 3.87868 14.8787C3.31607 15.4413 3 16.2044 3 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 17V4H19V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 8H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19C16 19.7956 16.3161 20.5587 16.8787 21.1213C17.4413 21.6839 18.2044 22 19 22C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19C22 18.2044 21.6839 17.4413 21.1213 16.8787C20.5587 16.3161 19.7956 16 19 16C18.2044 16 17.4413 16.3161 16.8787 16.8787C16.3161 17.4413 16 18.2044 16 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 21L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67859">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
