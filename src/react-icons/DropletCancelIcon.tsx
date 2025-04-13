import React from "react";

export const DropletCancelIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75099)">
<path d="M18.6062 12.0157C18.4619 11.6205 18.2804 11.2398 18.0642 10.8787L13.1742 3.61873C12.7542 2.99373 11.8872 2.81573 11.2382 3.22173C11.0753 3.32396 10.9356 3.4592 10.8282 3.61873L5.9352 10.8787C4.2402 13.7167 4.9002 17.3197 7.5022 19.4247C8.86467 20.521 10.5815 21.0802 12.3282 20.9967"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19C16 19.7956 16.3161 20.5587 16.8787 21.1213C17.4413 21.6839 18.2044 22 19 22C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19C22 18.2044 21.6839 17.4413 21.1213 16.8787C20.5587 16.3161 19.7956 16 19 16C18.2044 16 17.4413 16.3161 16.8787 16.8787C16.3161 17.4413 16 18.2044 16 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 21L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75099">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
