import React from "react";

export const IroningSteamIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71238)">
<path d="M12 19V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 4H16.459C17.1691 4.00005 17.8562 4.25202 18.3981 4.71107C18.9399 5.17013 19.3013 5.80651 19.418 6.507L19.995 9.971L20.805 14.836C20.8288 14.9791 20.8212 15.1257 20.7826 15.2656C20.7441 15.4054 20.6756 15.5352 20.5819 15.646C20.4882 15.7567 20.3715 15.8457 20.2399 15.9069C20.1084 15.968 19.9651 15.9998 19.82 16H3C3 14.1435 3.7375 12.363 5.05025 11.0503C6.36301 9.7375 8.14348 9 10 9H19.8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 19L7 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19L17 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71238">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
