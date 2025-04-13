import React from "react";

export const BellPinIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83863)">
<path d="M12 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 17V18C8.99999 18.4483 9.10046 18.8909 9.29402 19.2953C9.48758 19.6997 9.7693 20.0555 10.1185 20.3367C10.4677 20.6179 10.8754 20.8172 11.3118 20.9201C11.7481 21.0229 12.202 21.0266 12.64 20.931"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.121 20.1216C21.5406 19.7021 21.8265 19.1676 21.9423 18.5856C22.0581 18.0036 21.9988 17.4004 21.7717 16.8522C21.5447 16.3039 21.1602 15.8353 20.6668 15.5057C20.1734 15.176 19.5934 15 19 15C18.4066 15 17.8266 15.176 17.3332 15.5057C16.8398 15.8353 16.4553 16.3039 16.2283 16.8522C16.0012 17.4004 15.9419 18.0036 16.0577 18.5856C16.1735 19.1676 16.4594 19.7021 16.879 20.1216C17.297 20.5406 18.004 21.1666 19 22.0006C20.051 21.1106 20.759 20.4846 21.121 20.1216Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 18V18.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83863">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
