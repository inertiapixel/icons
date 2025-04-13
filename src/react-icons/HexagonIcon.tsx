import React from "react";

export const HexagonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57978)">
<path d="M10.425 1.41397L3.65 5.40997C3.14964 5.6882 2.7328 6.09518 2.44268 6.58874C2.15256 7.08229 1.99972 7.64446 2 8.21697V15.502C2.00078 16.0802 2.15693 16.6475 2.45213 17.1447C2.74733 17.6418 3.17072 18.0505 3.678 18.328L10.373 22.565C11.407 23.135 12.593 23.135 13.573 22.597L20.377 18.295C21.357 17.758 22 16.677 22 15.502V8.21797L21.995 8.01397C21.9676 7.54621 21.8385 7.09005 21.6167 6.67728C21.395 6.26451 21.0859 5.90506 20.711 5.62397L20.604 5.54897L20.597 5.54197C20.5415 5.49143 20.4808 5.44685 20.416 5.40897L13.64 1.41397C13.1476 1.14242 12.5944 1 12.032 1C11.4696 1 10.9164 1.14242 10.424 1.41397H10.425Z" />
</g>
<defs>
<clipPath id="clip0_802_57978">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
