import React from "react";

export const NfcIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67529)">
<path d="M11 20C10.2044 20 9.44129 19.6839 8.87868 19.1213C8.31607 18.5587 8 17.7956 8 17V6L13 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 4C13.7956 4 14.5587 4.31607 15.1213 4.87868C15.6839 5.44129 16 6.20435 16 7V18L11 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 7C4 6.20435 4.31607 5.44129 4.87868 4.87868C5.44129 4.31607 6.20435 4 7 4H17C17.7956 4 18.5587 4.31607 19.1213 4.87868C19.6839 5.44129 20 6.20435 20 7V17C20 17.7956 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7956 20 17 20H7C6.20435 20 5.44129 19.6839 4.87868 19.1213C4.31607 18.5587 4 17.7956 4 17V7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67529">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
