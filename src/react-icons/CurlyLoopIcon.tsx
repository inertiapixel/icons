import React from "react";

export const CurlyLoopIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77456)">
<path d="M21 8C17 8 14 10 14 13C14 13.7956 14.3161 14.5587 14.8787 15.1213C15.4413 15.6839 16.2044 16 17 16C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13C20 10 17.5 8 12 8C6.5 8 4 10 4 13C4 13.7956 4.31607 14.5587 4.87868 15.1213C5.44129 15.6839 6.20435 16 7 16C7.79565 16 8.55871 15.6839 9.12132 15.1213C9.68393 14.5587 10 13.7956 10 13C10 10 7 8 3 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77456">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
