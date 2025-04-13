import React from "react";

export const DotsDiagonalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75177)">
<path d="M6 17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17C8 16.7348 7.89464 16.4804 7.70711 16.2929C7.51957 16.1054 7.26522 16 7 16C6.73478 16 6.48043 16.1054 6.29289 16.2929C6.10536 16.4804 6 16.7348 6 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 7C16 7.26522 16.1054 7.51957 16.2929 7.70711C16.4804 7.89464 16.7348 8 17 8C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6C16.7348 6 16.4804 6.10536 16.2929 6.29289C16.1054 6.48043 16 6.73478 16 7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75177">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
