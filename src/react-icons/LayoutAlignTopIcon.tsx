import React from "react";

export const LayoutAlignTopIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57865)">
<path d="M20 3C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4C21 4.26522 20.8946 4.51957 20.7071 4.70711C20.5196 4.89464 20.2652 5 20 5H4C3.73478 5 3.48043 4.89464 3.29289 4.70711C3.10536 4.51957 3 4.26522 3 4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H20Z" />
<path d="M13 7C13.7956 7 14.5587 7.31607 15.1213 7.87868C15.6839 8.44129 16 9.20435 16 10V18C16 18.7956 15.6839 19.5587 15.1213 20.1213C14.5587 20.6839 13.7956 21 13 21H11C10.2044 21 9.44129 20.6839 8.87868 20.1213C8.31607 19.5587 8 18.7956 8 18V10C8 9.20435 8.31607 8.44129 8.87868 7.87868C9.44129 7.31607 10.2044 7 11 7H13Z" />
</g>
<defs>
<clipPath id="clip0_802_57865">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
