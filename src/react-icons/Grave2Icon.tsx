import React from "react";

export const Grave2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72673)">
<path d="M7 16.17V7C7 6.20435 7.31607 5.44129 7.87868 4.87868C8.44129 4.31607 9.20435 4 10 4H14C14.7956 4 15.5587 4.31607 16.1213 4.87868C16.6839 5.44129 17 6.20435 17 7V16.171"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 9H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 21V19C5 18.2044 5.31607 17.4413 5.87868 16.8787C6.44129 16.3161 7.20435 16 8 16H16C16.7956 16 17.5587 16.3161 18.1213 16.8787C18.6839 17.4413 19 18.2044 19 19V21H5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72673">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
