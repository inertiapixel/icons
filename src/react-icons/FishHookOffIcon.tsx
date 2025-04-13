import React from "react";

export const FishHookOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73629)">
<path d="M16 9V12M15.915 15.924C15.6861 17.1496 15.0075 18.2455 14.0124 18.9966C13.0173 19.7478 11.7775 20.1001 10.536 19.9844C9.29463 19.8687 8.14122 19.2934 7.30206 18.3713C6.46289 17.4492 5.99851 16.2468 6 15V11L9 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 7C14 7.53043 14.2107 8.03914 14.5858 8.41421C14.9609 8.78929 15.4696 9 16 9C16.5304 9 17.0391 8.78929 17.4142 8.41421C17.7893 8.03914 18 7.53043 18 7C18 6.46957 17.7893 5.96086 17.4142 5.58579C17.0391 5.21071 16.5304 5 16 5C15.4696 5 14.9609 5.21071 14.5858 5.58579C14.2107 5.96086 14 6.46957 14 7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 5V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73629">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
