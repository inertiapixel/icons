import React from "react";

export const BugOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80884)">
<path d="M9.88281 5.87337C10.303 5.4553 10.8376 5.17106 11.4192 5.05653C12.0007 4.94201 12.6032 5.00232 13.1505 5.22987C13.6978 5.45742 14.1655 5.84201 14.4944 6.33509C14.8234 6.82816 14.9989 7.40764 14.9988 8.00037V9.00037"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 9H16C16.5956 9.89259 16.9409 10.9286 17 12V13M16.702 16.705C16.3018 17.8117 15.5241 18.7417 14.5057 19.3315C13.4874 19.9212 12.2936 20.1329 11.1346 19.9292C9.97553 19.7255 8.92548 19.1195 8.1692 18.2179C7.41293 17.3163 6.99891 16.1768 7 15V12C7.05907 10.9286 7.4044 9.89259 8 9H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 13H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 13H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 19L7.35 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 7L7.75 9.4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 7L16.25 9.4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80884">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
