import React from "react";

export const ShoeOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63931)">
<path d="M13.846 9.868L17.926 10.84C18.8012 11.0483 19.5806 11.5455 20.1384 12.2513C20.6961 12.9571 20.9997 13.8304 21 14.73V17M18 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17V7C3 6.73478 3.10536 6.48043 3.29289 6.29289C3.48043 6.10536 3.73478 6 4 6H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 18V17C8 15.9391 7.57857 14.9217 6.82843 14.1716C6.07828 13.4214 5.06087 13 4 13H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 11.9989L10.663 10.6719"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63931">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
