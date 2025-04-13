import React from "react";

export const MapPinXIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69378)">
<path d="M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.0222 21.2058C12.64 21.4333 12.1929 21.527 11.7515 21.4719C11.3102 21.4168 10.8998 21.2162 10.5852 20.9018L6.34118 16.6588C5.32281 15.6397 4.59853 14.3645 4.24483 12.9679C3.89114 11.5713 3.92115 10.1051 4.33171 8.72415C4.74226 7.34319 5.51812 6.09872 6.57735 5.12217C7.63658 4.14561 8.93986 3.47323 10.3496 3.176C11.7593 2.87878 13.2231 2.96776 14.5864 3.43354C15.9497 3.89932 17.162 4.72462 18.0951 5.82228C19.0283 6.91994 19.6477 8.24922 19.888 9.66974C20.1282 11.0903 19.9804 12.5493 19.4602 13.8928"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22L17 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 22L22 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69378">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
