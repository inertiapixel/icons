import React from "react";

export const TemperatureCelsiusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61967)">
<path d="M4 8C4 8.53043 4.21071 9.03914 4.58579 9.41421C4.96086 9.78929 5.46957 10 6 10C6.53043 10 7.03914 9.78929 7.41421 9.41421C7.78929 9.03914 8 8.53043 8 8C8 7.46957 7.78929 6.96086 7.41421 6.58579C7.03914 6.21071 6.53043 6 6 6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 9C20 8.20435 19.6839 7.44129 19.1213 6.87868C18.5587 6.31607 17.7956 6 17 6H16C15.2044 6 14.4413 6.31607 13.8787 6.87868C13.3161 7.44129 13 8.20435 13 9V15C13 15.7956 13.3161 16.5587 13.8787 17.1213C14.4413 17.6839 15.2044 18 16 18H17C17.7956 18 18.5587 17.6839 19.1213 17.1213C19.6839 16.5587 20 15.7956 20 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61967">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
