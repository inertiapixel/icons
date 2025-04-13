import React from "react";

export const CurrencySomIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77152)">
<path d="M10 18V6H5V16C5 16.5304 4.78929 17.0391 4.41421 17.4142C4.03914 17.7893 3.53043 18 3 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 12C18.7956 12 19.5587 12.3161 20.1213 12.8787C20.6839 13.4413 21 14.2044 21 15C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18H14V6H18C18.7956 6 19.5587 6.31607 20.1213 6.87868C20.6839 7.44129 21 8.20435 21 9C21 9.79565 20.6839 10.5587 20.1213 11.1213C19.5587 11.6839 18.7956 12 18 12ZM18 12H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77152">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
