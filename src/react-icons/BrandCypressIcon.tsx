import React from "react";

export const BrandCypressIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82506)">
<path d="M19.4786 17.007C20.595 15.3395 21.1221 13.3467 20.9762 11.3453C20.8302 9.3439 20.0195 7.44869 18.673 5.96083C17.3264 4.47297 15.5212 3.47781 13.5443 3.13349C11.5673 2.78917 9.53196 3.11544 7.76168 4.06045C5.9914 5.00547 4.58773 6.51502 3.77372 8.34923C2.95971 10.1834 2.78205 12.2371 3.26897 14.1838C3.7559 16.1306 4.87948 17.8588 6.46116 19.0938C8.04285 20.3288 9.99191 20.9997 11.9986 21C12.8946 21 13.6896 20.427 13.9726 19.577L17.4986 9.00001"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 9L15.5 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.7629 9.41167C10.3081 9.14516 9.79107 9.00319 9.26396 9.00005C8.73684 8.99691 8.2182 9.13272 7.76027 9.39379C7.30233 9.65487 6.92127 10.032 6.65546 10.4872C6.38964 10.9424 6.24846 11.4596 6.24612 11.9867C6.24379 12.5138 6.38038 13.0323 6.64215 13.4898C6.90392 13.9473 7.28162 14.3278 7.73723 14.5929C8.19283 14.8581 8.71024 14.9985 9.23737 15C9.76449 15.0015 10.2827 14.8641 10.7399 14.6017"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82506">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
