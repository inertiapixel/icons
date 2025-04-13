import React from "react";

export const CsvIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77538)">
<path d="M10 15C10 15.2652 10.1054 15.5196 10.2929 15.7071C10.4804 15.8946 10.7348 16 11 16H13C13.2652 16 13.5196 15.8946 13.7071 15.7071C13.8946 15.5196 14 15.2652 14 15V13C14 12.7348 13.8946 12.4804 13.7071 12.2929C13.5196 12.1054 13.2652 12 13 12H11C10.7348 12 10.4804 11.8946 10.2929 11.7071C10.1054 11.5196 10 11.2652 10 11V9C10 8.73478 10.1054 8.48043 10.2929 8.29289C10.4804 8.10536 10.7348 8 11 8H13C13.2652 8 13.5196 8.10536 13.7071 8.29289C13.8946 8.48043 14 8.73478 14 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 8L19 16L21 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 10C7 9.46957 6.78929 8.96086 6.41421 8.58579C6.03914 8.21071 5.53043 8 5 8C4.46957 8 3.96086 8.21071 3.58579 8.58579C3.21071 8.96086 3 9.46957 3 10V14C3 14.5304 3.21071 15.0391 3.58579 15.4142C3.96086 15.7893 4.46957 16 5 16C5.53043 16 6.03914 15.7893 6.41421 15.4142C6.78929 15.0391 7 14.5304 7 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77538">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
