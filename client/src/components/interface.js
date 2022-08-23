import styled from "styled-components";

export const TotDiv = styled.div`
height: 100%;
width: 100%;
`

export const SideBarPart = styled.div`
float: left;
width: 20%;
height: 100%;
background-color: #0e1033;
background-size: contain;
background-repeat: no-repeat,repeat;
display: flex;
  flex-flow: column;
  position: absolute;

  /* contain: content; */
/* align-content: stretch; */

`
export const MainUser = styled.div`
/* background-color: aquamarine; */
background-size: cover;
width: 80%;
/* position: fixed; */
bottom: 0;
left: 0;
height: 100%;
float: right;
`
export const WhitePara = styled.p`
align-self: center;
color: aliceblue;
vertical-align: middle;
`

export const BottomPart = styled.div`
align-self: baseline;
position: absolute;
padding-left: 20%;
bottom: 0;
`

export const  RightBottom = styled.div`
position: absolute;
bottom: 0;
right: 0;
text-align: center;
margin-right: 3%;
`

export const TopRight = styled.div`
position: absolute;
top: 0;
right: 0;
text-align: center;
margin-right: 3%;
margin-top: 2%;
`