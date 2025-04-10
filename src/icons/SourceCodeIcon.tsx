import React from "react";

export const SourceCodeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_63290)">
<path d="M14.5 4H17C17.7956 4 18.5587 4.31607 19.1213 4.87868C19.6839 5.44129 20 6.20435 20 7V17C20 17.7956 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7956 20 17 20H7C6.20435 20 5.44129 19.6839 4.87868 19.1213C4.31607 18.5587 4 17.7956 4 17V12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 5L4 7L6 9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 9L12 7L10 5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63290">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
