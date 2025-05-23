import React from "react";

export const EngineIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74840)">
<path d="M3 10V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 13H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10H8L10 8H13.382C13.5677 8.0001 13.7496 8.05188 13.9075 8.14955C14.0654 8.24722 14.193 8.38692 14.276 8.553L15.724 11.447C15.807 11.6131 15.9346 11.7528 16.0925 11.8504C16.2504 11.9481 16.4323 11.9999 16.618 12H18V10H20C20.2652 10 20.5196 10.1054 20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18H18V16H15V18C15 18.2652 14.8946 18.5196 14.7071 18.7071C14.5196 18.8946 14.2652 19 14 19H10.535C10.3704 19 10.2084 18.9594 10.0632 18.8818C9.91808 18.8042 9.79435 18.6919 9.703 18.555L8 16H6V10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74840">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
