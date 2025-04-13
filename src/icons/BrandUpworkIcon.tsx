import React from "react";

export const BrandUpworkIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81280)">
<path d="M3 7V12C3 12.7956 3.31607 13.5587 3.87868 14.1213C4.44129 14.6839 5.20435 15 6 15C6.79565 15 7.55871 14.6839 8.12132 14.1213C8.68393 13.5587 9 12.7956 9 12V7H10L14 13C14.824 14.319 15.945 15 17.5 15C18.4283 15 19.3185 14.6313 19.9749 13.9749C20.6313 13.3185 21 12.4283 21 11.5C21 10.5717 20.6313 9.6815 19.9749 9.02513C19.3185 8.36875 18.4283 8 17.5 8C15.473 8 14.363 9 14 11C13.758 12.33 13.092 15 12 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81280">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
