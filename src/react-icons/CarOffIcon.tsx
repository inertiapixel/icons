import React from "react";

export const CarOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80039)">
<path d="M5 17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19C7.53043 19 8.03914 18.7893 8.41421 18.4142C8.78929 18.0391 9 17.5304 9 17C9 16.4696 8.78929 15.9609 8.41421 15.5858C8.03914 15.2107 7.53043 15 7 15C6.46957 15 5.96086 15.2107 5.58579 15.5858C5.21071 15.9609 5 16.4696 5 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5825 15.5898C15.2072 15.9649 14.9963 16.4736 14.9961 17.0041C14.9959 17.5347 15.2065 18.0436 15.5815 18.4188C15.9565 18.7941 16.4653 19.0051 16.9958 19.0052C17.5263 19.0054 18.0352 18.7949 18.4105 18.4198"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 17H3V11M3 11L5 6H6M3 11H11M10 6H14L18 11M18 11H19C19.5304 11 20.0391 11.2107 20.4142 11.5858C20.7893 11.9609 21 12.4696 21 13V17M18 11H15M15 17H9M12 8V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80039">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
