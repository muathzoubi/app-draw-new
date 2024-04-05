import React from 'react';
import styled from 'styled-components';
const StyledColorBucket = styled.i` & {
   box-sizing: border-boxposition: relative
   ; display: block
;   margin:5px;
   ; transform: scale(var(--ggs, 1))
   ; width: 6px
   ; height: 10px
   ; border: 2px solid
   ; border-bottom: 0
   ; border-top-left-radius: 100px
   ; border-top-right-radius: 100px
   ; margin-top: -18px
   ; } &::after, &::before { content: ''
   ; display: block
   ; box-sizing: border-box
   ; position: absolute
   ; transform: rotate(45deg)
   ; } &::before { border: 2px solid
   ; border-bottom-left-radius: 4px
   ; border-bottom-right-radius: 4px
   ; top: 4px
   ; left: -4px
   ; width: 14px
   ; height: 16px
   ; } &::after { width: 6px
   ; height: 6px
   ; border-radius: 0 100% 100% 100%
   ; background: currentColor
   ; right: -15px
   ; bottom: -12px
   ; }`;
export const ColorBucket = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledColorBucket {...props} ref={ref} icon-role="color-bucket" />
    </>
  );
});
