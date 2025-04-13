import React from "react";

export const ToolIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61477)">
<path d="M6.99985 9.99985H9.99985V6.99985L6.49985 3.49985C7.61948 2.96513 8.87735 2.79066 10.1003 3.00048C11.3232 3.21029 12.4509 3.79407 13.3283 4.67143C14.2056 5.54878 14.7894 6.67656 14.9992 7.89946C15.209 9.12235 15.0346 10.3802 14.4999 11.4999L20.4999 17.4999C20.8977 17.8977 21.1212 18.4372 21.1212 18.9999C21.1212 19.5625 20.8977 20.102 20.4999 20.4999C20.102 20.8977 19.5625 21.1212 18.9999 21.1212C18.4372 21.1212 17.8977 20.8977 17.4999 20.4999L11.4999 14.4999C10.3802 15.0346 9.12235 15.209 7.89946 14.9992C6.67656 14.7894 5.54878 14.2056 4.67143 13.3283C3.79407 12.4509 3.21029 11.3232 3.00048 10.1003C2.79066 8.87735 2.96513 7.61948 3.49985 6.49985L6.99985 9.99985Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61477">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
