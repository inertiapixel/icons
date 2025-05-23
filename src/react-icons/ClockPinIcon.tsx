import React from "react";

export const ClockPinIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78473)">
<path d="M20.971 11.2779C20.8284 9.50635 20.1645 7.81666 19.0629 6.4219C17.9614 5.02714 16.4715 3.98974 14.7812 3.44051C13.0909 2.89129 11.2758 2.85482 9.56484 3.33571C7.85384 3.8166 6.32353 4.79331 5.16685 6.1427C4.01016 7.4921 3.2789 9.15375 3.06526 10.9182C2.85163 12.6826 3.16517 14.4707 3.96638 16.0572C4.76758 17.6436 6.02056 18.9574 7.56734 19.8327C9.11413 20.7081 10.8855 21.1059 12.658 20.9759"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L13.5 13.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.121 20.1216C21.5406 19.7021 21.8265 19.1676 21.9423 18.5856C22.0581 18.0036 21.9988 17.4004 21.7717 16.8522C21.5447 16.3039 21.1602 15.8353 20.6668 15.5057C20.1734 15.176 19.5934 15 19 15C18.4066 15 17.8266 15.176 17.3332 15.5057C16.8398 15.8353 16.4553 16.3039 16.2283 16.8522C16.0012 17.4004 15.9419 18.0036 16.0577 18.5856C16.1735 19.1676 16.4594 19.7021 16.879 20.1216C17.297 20.5406 18.004 21.1666 19 22.0006C20.051 21.1106 20.759 20.4846 21.121 20.1216Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 18V18.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78473">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
