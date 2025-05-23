import React from "react";

export const SwipeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62211)">
<path d="M15 16.572V18.992C14.9995 19.5246 14.7876 20.0352 14.4109 20.4116C14.0343 20.7881 13.5236 20.9997 12.991 21H5.01C4.47709 21 3.96599 20.7884 3.58907 20.4116C3.21215 20.0349 3.00027 19.5239 3 18.991V11.01C3 10.4771 3.21163 9.96599 3.58836 9.58907C3.96509 9.21215 4.47609 9.00027 5.009 9H7.963"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.167 4.51C9.30738 3.98822 9.64903 3.54345 10.117 3.27329C10.5849 3.00314 11.1409 2.92966 11.663 3.069L19.489 5.166C20.0108 5.30638 20.4555 5.64803 20.7257 6.11598C20.9959 6.58393 21.0693 7.13994 20.93 7.662L18.833 15.488C18.6926 16.0098 18.351 16.4545 17.883 16.7247C17.4151 16.9949 16.8591 17.0683 16.337 16.929L8.51 14.832C7.98822 14.6916 7.54345 14.35 7.27329 13.882C7.00314 13.4141 6.92966 12.8581 7.069 12.336L9.167 4.51Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62211">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
