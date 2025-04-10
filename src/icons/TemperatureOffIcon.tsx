import React from "react";

export const TemperatureOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_61952)">
<path d="M9.99988 10V13.5C9.34956 13.8755 8.81808 14.4265 8.46623 15.0899C8.11439 15.7533 7.9564 16.5023 8.01033 17.2513C8.06427 18.0003 8.32796 18.719 8.77123 19.3252C9.2145 19.9313 9.81944 20.4005 10.5169 20.6789C11.2143 20.9573 11.976 21.0338 12.7148 20.8996C13.4537 20.7654 14.1398 20.426 14.6948 19.9201C15.2497 19.4142 15.6511 18.7623 15.8529 18.039C16.0547 17.3156 16.0488 16.5501 15.8359 15.83M13.9999 10V5C13.9999 4.46957 13.7892 3.96086 13.4141 3.58579C13.039 3.21071 12.5303 3 11.9999 3C11.4694 3 10.9607 3.21071 10.5857 3.58579C10.2106 3.96086 9.99988 4.46957 9.99988 5V6" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 9H14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61952">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
