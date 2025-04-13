import React from "react";

export const DropletUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75006)">
<path d="M18.6002 11.9997C18.4568 11.6105 18.2774 11.2355 18.0642 10.8797L13.1742 3.61969C12.7542 2.99369 11.8872 2.81569 11.2382 3.22169C11.0753 3.32391 10.9356 3.45915 10.8282 3.61869L5.9352 10.8787C4.2402 13.7167 4.9002 17.3197 7.5022 19.4247C8.91225 20.5587 10.6994 21.1168 12.5042 20.9867"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 19L19 16L16 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75006">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
