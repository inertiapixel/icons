import React from "react";

export const NumberIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_67306)">
<path d="M4 17V7L11 17V7" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 17H20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10C15 10.7956 15.2634 11.5587 15.7322 12.1213C16.2011 12.6839 16.837 13 17.5 13C18.163 13 18.7989 12.6839 19.2678 12.1213C19.7366 11.5587 20 10.7956 20 10C20 9.20435 19.7366 8.44129 19.2678 7.87868C18.7989 7.31607 18.163 7 17.5 7C16.837 7 16.2011 7.31607 15.7322 7.87868C15.2634 8.44129 15 9.20435 15 10Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67306">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
