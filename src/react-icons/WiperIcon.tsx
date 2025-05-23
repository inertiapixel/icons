import React from "react";

export const WiperIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59767)">
<path d="M11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19C12.2652 19 12.5196 18.8946 12.7071 18.7071C12.8946 18.5196 13 18.2652 13 18C13 17.7348 12.8946 17.4804 12.7071 17.2929C12.5196 17.1054 12.2652 17 12 17C11.7348 17 11.4804 17.1054 11.2929 17.2929C11.1054 17.4804 11 17.7348 11 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 9.00025L8.5 14.5002C9.43464 13.5841 10.6912 13.071 12 13.071C13.3088 13.071 14.5654 13.5841 15.5 14.5002L21 9.00025C19.8739 7.72337 18.489 6.70072 16.9373 6.00025C15.3855 5.29977 13.7025 4.9375 12 4.9375C10.2975 4.9375 8.61447 5.29977 7.06275 6.00025C5.51102 6.70072 4.1261 7.72337 3 9.00025Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0008 17.9992L9.80078 5.19922"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59767">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
