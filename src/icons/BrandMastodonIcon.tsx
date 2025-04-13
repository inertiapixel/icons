import React from "react";

export const BrandMastodonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81967)">
<path d="M18.648 15.2541C16.832 17.0171 12 16.8801 12 16.8801C10.8985 16.8941 9.79804 16.8084 8.712 16.6241C9.839 18.6091 12.832 19.4341 17.694 19.0991C15.749 21.1121 4.096 24.3561 4.026 11.4631L4 10.3091C4 7.2731 4.023 6.19411 5.352 4.67611C7.023 2.76611 12 3.0101 12 3.0101C12 3.0101 16.977 2.7671 18.648 4.6771C19.977 6.1951 20 7.27411 20 10.3101C20 13.3461 19.544 14.3841 18.648 15.2541Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11.204V8.278M12 8.278C12 7.02 11.105 6 10 6C8.895 6 8 7.02 8 8.278V13M12 8.278C12 7.02 12.895 6 14 6C15.105 6 16 7.02 16 8.278V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81967">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
