import React from "react";

export const OctagonPlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67269)">
<path d="M12.8016 2.16461L18.3766 4.55361C18.8566 4.75961 19.2396 5.14261 19.4466 5.62361L21.8346 11.1976C22.0546 11.7096 22.0546 12.2896 21.8346 12.8016L19.4456 18.3766C19.2396 18.8566 18.8566 19.2396 18.3756 19.4466L12.8016 21.8346C12.2896 22.0546 11.7096 22.0546 11.1976 21.8346L5.62261 19.4456C5.14173 19.2397 4.75857 18.8565 4.55261 18.3756L2.16461 12.8016C2.056 12.5482 2 12.2753 2 11.9996C2 11.7239 2.056 11.451 2.16461 11.1976L4.55361 5.62261C4.75961 5.14261 5.14261 4.75961 5.62361 4.55261L11.1976 2.16461C11.451 2.056 11.7239 2 11.9996 2C12.2753 2 12.5482 2.056 12.8016 2.16461Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67269">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
