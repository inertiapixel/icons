import React from "react";

export const TriangleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57069)">
<path d="M12.0006 1.67188C11.4997 1.67181 11.0072 1.80089 10.5707 2.04665C10.1342 2.29241 9.76839 2.64654 9.50864 3.07487L1.39864 16.6119C1.14103 17.0523 1.00359 17.5527 1.00007 18.0629C0.996544 18.5731 1.12706 19.0754 1.37855 19.5193C1.63004 19.9633 1.9937 20.3334 2.43315 20.5927C2.87259 20.852 3.37242 20.9914 3.88264 20.9969H20.1076C20.6174 20.9933 21.1173 20.856 21.5574 20.5988C21.9976 20.3416 22.3625 19.9734 22.6158 19.531C22.8691 19.0886 23.002 18.5875 23.0011 18.0777C23.0002 17.568 22.8655 17.0673 22.6106 16.6259L14.4946 3.07988C14.2351 2.65052 13.8692 2.29537 13.4323 2.04872C12.9954 1.80208 12.5023 1.67228 12.0006 1.67188Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57069">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
