import React from "react";

export const BluetoothOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_83669)">
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.4399 16.45L12.0019 20V12M12.0019 8V4L17.0019 8L14.2259 10.22M12.0039 11.999L7.00391 15.999" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83669">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
