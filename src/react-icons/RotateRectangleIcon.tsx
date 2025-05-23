import React from "react";

export const RotateRectangleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64881)">
<path d="M10.0913 4.01026L10.5873 3.51526C10.9623 3.14032 11.4709 2.92969 12.0013 2.92969C12.5316 2.92969 13.0402 3.14032 13.4153 3.51526L20.4863 10.5853C20.6722 10.771 20.8197 10.9916 20.9204 11.2344C21.021 11.4772 21.0728 11.7374 21.0728 12.0003C21.0728 12.2631 21.021 12.5233 20.9204 12.7661C20.8197 13.0089 20.6722 13.2295 20.4863 13.4153L13.4163 20.4853C13.2305 20.6712 13.0099 20.8187 12.7671 20.9194C12.5243 21.02 12.2641 21.0718 12.0013 21.0718C11.7384 21.0718 11.4782 21.02 11.2354 20.9194C10.9926 20.8187 10.772 20.6712 10.5863 20.4853L3.51626 13.4153C3.33031 13.2295 3.18279 13.0089 3.08214 12.7661C2.98149 12.5233 2.92969 12.2631 2.92969 12.0003C2.92969 11.7374 2.98149 11.4772 3.08214 11.2344C3.18279 10.9916 3.33031 10.771 3.51626 10.5853L7.05126 7.05026H3.06326"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.05078 11.0388V7.05078"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64881">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
