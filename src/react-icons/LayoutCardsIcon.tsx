import React from "react";

export const LayoutCardsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57852)">
<path d="M8 3C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6V18C11 18.7956 10.6839 19.5587 10.1213 20.1213C9.55871 20.6839 8.79565 21 8 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H8Z" />
<path d="M18 3C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V12C21 12.7956 20.6839 13.5587 20.1213 14.1213C19.5587 14.6839 18.7956 15 18 15H16C15.2044 15 14.4413 14.6839 13.8787 14.1213C13.3161 13.5587 13 12.7956 13 12V6C13 5.20435 13.3161 4.44129 13.8787 3.87868C14.4413 3.31607 15.2044 3 16 3H18Z" />
</g>
<defs>
<clipPath id="clip0_802_57852">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
