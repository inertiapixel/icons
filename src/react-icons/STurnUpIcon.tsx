import React from "react";

export const STurnUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64680)">
<path d="M7 19C7 18.4696 6.78929 17.9609 6.41421 17.5858C6.03914 17.2107 5.53043 17 5 17C4.46957 17 3.96086 17.2107 3.58579 17.5858C3.21071 17.9609 3 18.4696 3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21C5.53043 21 6.03914 20.7893 6.41421 20.4142C6.78929 20.0391 7 19.5304 7 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 17V7.5C5 6.57174 5.36875 5.6815 6.02513 5.02513C6.6815 4.36875 7.57174 4 8.5 4C9.42826 4 10.3185 4.36875 10.9749 5.02513C11.6313 5.6815 12 6.57174 12 7.5V16.5C12 17.4283 12.3687 18.3185 13.0251 18.9749C13.6815 19.6313 14.5717 20 15.5 20C16.4283 20 17.3185 19.6313 17.9749 18.9749C18.6313 18.3185 19 17.4283 19 16.5V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 6L19 3L22 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64680">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
