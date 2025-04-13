import React from "react";

export const BrandSpaceheyIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81526)">
<path d="M15 6C15 6.53043 15.2107 7.03914 15.5858 7.41421C15.9609 7.78929 16.4696 8 17 8C17.5304 8 18.0391 7.78929 18.4142 7.41421C18.7893 7.03914 19 6.53043 19 6C19 5.46957 18.7893 4.96086 18.4142 4.58579C18.0391 4.21071 17.5304 4 17 4C16.4696 4 15.9609 4.21071 15.5858 4.58579C15.2107 4.96086 15 5.46957 15 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 20H20V14C20 13.2044 19.6839 12.4413 19.1213 11.8787C18.5587 11.3161 17.7956 11 17 11C16.2044 11 15.4413 11.3161 14.8787 11.8787C14.3161 12.4413 14 13.2044 14 14V20Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 8V10.5C11 11.4283 10.6313 12.3185 9.97487 12.9749C9.3185 13.6313 8.42826 14 7.5 14H7C6.20435 14 5.44129 13.6839 4.87868 13.1213C4.31607 12.5587 4 11.7956 4 11C4 10.2044 4.31607 9.44129 4.87868 8.87868C5.44129 8.31607 6.20435 8 7 8H11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81526">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
