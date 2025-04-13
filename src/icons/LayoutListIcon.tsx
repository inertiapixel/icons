import React from "react";

export const LayoutListIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57823)">
<path d="M18 3C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V8C21 8.79565 20.6839 9.55871 20.1213 10.1213C19.5587 10.6839 18.7956 11 18 11H6C5.20435 11 4.44129 10.6839 3.87868 10.1213C3.31607 9.55871 3 8.79565 3 8V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18Z" fill="black"/>
<path d="M18 13C18.7956 13 19.5587 13.3161 20.1213 13.8787C20.6839 14.4413 21 15.2044 21 16V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V16C3 15.2044 3.31607 14.4413 3.87868 13.8787C4.44129 13.3161 5.20435 13 6 13H18Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57823">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
