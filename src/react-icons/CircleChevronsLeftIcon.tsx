import React from "react";

export const CircleChevronsLeftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79291)">
<path d="M15 15L12 12L15 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 15L8 12L11 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.999 12.0003C20.9641 9.6251 19.9915 7.36003 18.2933 5.69897C16.5951 4.03791 14.3092 3.11557 11.9337 3.13306C9.55834 3.15054 7.28618 4.10644 5.61266 5.79232C3.93914 7.4782 3 9.75734 3 12.1328C3 14.5083 3.93914 16.7874 5.61266 18.4733C7.28618 20.1592 9.55834 21.1151 11.9337 21.1326C14.3092 21.1501 16.5951 20.2277 18.2933 18.5667C19.9915 16.9056 20.9641 14.6405 20.999 12.2653V12.0003Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79291">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
