import React from "react";

export const MoustacheIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67933)">
<path d="M14.9987 9C15.5255 8.99984 16.043 9.13838 16.4992 9.40169C16.9555 9.66501 17.3343 10.0438 17.5977 10.5C18.5307 11.833 19.7307 12.056 20.7237 12.056H21.0147L21.7847 12.012H21.9977C21.0347 13.938 18.8347 14.937 15.3977 15.012H14.9977H14.8327C14.037 14.9901 13.2827 14.6531 12.7355 14.075C12.1884 13.4969 11.8933 12.7251 11.9152 11.9295C11.9371 11.1339 12.2741 10.3795 12.8522 9.83234C13.4303 9.28521 14.202 8.99012 14.9977 9.012L14.9987 9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.999 9C8.47223 8.99984 7.95471 9.13838 7.49848 9.40169C7.04224 9.66501 6.66338 10.0438 6.4 10.5C5.467 11.833 4.267 12.056 3.274 12.056H2.983L2.213 12.012H2C2.963 13.938 5.163 14.937 8.6 15.012H9H9.165C9.96065 14.9901 10.715 14.6531 11.2622 14.075C11.8093 13.4969 12.1044 12.7251 12.0825 11.9295C12.0606 11.1339 11.7236 10.3795 11.1455 9.83234C10.5674 9.28521 9.79565 8.99012 9 9.012L8.999 9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67933">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
