import React from "react";

export const SandboxIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64639)">
<path d="M19.953 8.017L21 15V17C21 17.7956 20.6839 18.5587 20.1213 19.1213C19.5587 19.6839 18.7956 20 18 20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.31607 18.5587 3 17.7956 3 17V15L4.245 6.703C4.31611 6.22948 4.55474 5.79719 4.91752 5.48468C5.28031 5.17218 5.74317 5.0002 6.222 5H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 15H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 3L18.5 4.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.75 3.75L13.75 10.75"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 10.5002C8.667 9.83325 10.333 9.83325 12 10.5002C13.667 11.1672 15.333 11.1672 17 10.5002"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64639">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
