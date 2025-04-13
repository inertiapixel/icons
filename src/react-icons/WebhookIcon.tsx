import React from "react";

export const WebhookIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59915)">
<path d="M4.876 13.6094C4.28624 13.9789 3.80311 14.496 3.47436 15.1095C3.14561 15.7229 2.98261 16.4115 3.00147 17.1073C3.02033 17.803 3.2204 18.4818 3.58191 19.0765C3.94341 19.6713 4.45385 20.1614 5.06277 20.4985C5.67169 20.8355 6.35802 21.0079 7.05395 20.9985C7.74988 20.9891 8.43131 20.7983 9.03092 20.4449C9.63053 20.0916 10.1276 19.5878 10.4729 18.9836C10.8182 18.3793 10.9999 17.6954 11 16.9994H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.066 20.502C15.6003 20.7969 16.1949 20.9656 16.8045 20.9953C17.414 21.0249 18.0222 20.9147 18.5826 20.6731C19.143 20.4315 19.6406 20.0649 20.0375 19.6013C20.4344 19.1377 20.7199 18.5895 20.8722 17.9985C21.0246 17.4076 21.0397 16.7897 20.9164 16.192C20.7931 15.5943 20.5348 15.0328 20.161 14.5504C19.7873 14.0679 19.3082 13.6774 18.7603 13.4087C18.2124 13.14 17.6102 13.0002 17 13C16.294 13 15.576 13.179 15 13.5L12 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 8C16 6.93913 15.5786 5.92172 14.8284 5.17157C14.0783 4.42143 13.0609 4 12 4C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8C8 9.506 8.77 10.818 10 11.5L7 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59915">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
