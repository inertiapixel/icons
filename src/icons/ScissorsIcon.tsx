import React from "react";

export const ScissorsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64525)">
<path d="M3 7C3 7.79565 3.31607 8.55871 3.87868 9.12132C4.44129 9.68393 5.20435 10 6 10C6.79565 10 7.55871 9.68393 8.12132 9.12132C8.68393 8.55871 9 7.79565 9 7C9 6.20435 8.68393 5.44129 8.12132 4.87868C7.55871 4.31607 6.79565 4 6 4C5.20435 4 4.44129 4.31607 3.87868 4.87868C3.31607 5.44129 3 6.20435 3 7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 17C3 17.7956 3.31607 18.5587 3.87868 19.1213C4.44129 19.6839 5.20435 20 6 20C6.79565 20 7.55871 19.6839 8.12132 19.1213C8.68393 18.5587 9 17.7956 9 17C9 16.2044 8.68393 15.4413 8.12132 14.8787C7.55871 14.3161 6.79565 14 6 14C5.20435 14 4.44129 14.3161 3.87868 14.8787C3.31607 15.4413 3 16.2044 3 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.60156 8.60156L19.0016 19.0016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.60156 15.4L19.0016 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64525">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
