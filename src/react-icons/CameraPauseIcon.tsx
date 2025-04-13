import React from "react";

export const CameraPauseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80232)">
<path d="M13 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H6C6.53043 7 7.03914 6.78929 7.41421 6.41421C7.78929 6.03914 8 5.53043 8 5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4H15C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5C16 5.53043 16.2107 6.03914 16.5858 6.41421C16.9609 6.78929 17.4696 7 18 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.9572 13.5047C15.0698 12.8455 14.9588 12.1676 14.6419 11.5786C14.3251 10.9897 13.8205 10.5235 13.2084 10.2541C12.5963 9.98477 11.9117 9.92763 11.2635 10.0918C10.6152 10.256 10.0403 10.6321 9.63023 11.1604C9.22014 11.6887 8.99833 12.3388 9.00001 13.0076C9.00169 13.6763 9.22679 14.3253 9.63953 14.8515C10.0523 15.3777 10.629 15.7509 11.2781 15.9119C11.9272 16.0728 12.6115 16.0122 13.2222 15.7397"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 17V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80232">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
