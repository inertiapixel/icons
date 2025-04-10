import React from "react";

export const NfcOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_67534)">
<path d="M11 20C10.2044 20 9.44129 19.6839 8.87868 19.1213C8.31607 18.5587 8 17.7956 8 17V8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 4C13.7956 4 14.5587 4.31607 15.1213 4.87868C15.6839 5.44129 16 6.20435 16 7V12M16 16V18L11 13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 4H17C17.7956 4 18.5587 4.31607 19.1213 4.87868C19.6839 5.44129 20 6.20435 20 7V16M19.127 19.116C18.8485 19.3967 18.5171 19.6193 18.152 19.771C17.7869 19.9228 17.3954 20.0006 17 20H7C6.20435 20 5.44129 19.6839 4.87868 19.1213C4.31607 18.5587 4 17.7956 4 17V7C4 6.17 4.337 5.418 4.882 4.875" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67534">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
