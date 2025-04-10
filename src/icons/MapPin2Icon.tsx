import React from "react";

export const MapPin2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_69497)">
<path d="M12 18.5L9 17L3 20V7L9 4L15 7L21 4V11" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 4V17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 7V12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.121 20.1216C21.5406 19.7021 21.8265 19.1676 21.9423 18.5856C22.0581 18.0036 21.9988 17.4004 21.7717 16.8522C21.5447 16.3039 21.1602 15.8353 20.6668 15.5057C20.1734 15.176 19.5934 15 19 15C18.4066 15 17.8266 15.176 17.3332 15.5057C16.8398 15.8353 16.4553 16.3039 16.2283 16.8522C16.0012 17.4004 15.9419 18.0036 16.0577 18.5856C16.1735 19.1676 16.4594 19.7021 16.879 20.1216C17.297 20.5406 18.004 21.1666 19 22.0006C20.051 21.1106 20.759 20.4846 21.121 20.1216Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 18V18.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69497">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
