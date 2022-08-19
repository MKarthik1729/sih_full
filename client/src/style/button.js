import styled from "styled-components";

export const PositionButton = styled.div`
    position: fixed;
    top: 50%;
    left: 70%;
`

export const StyledButton = styled.button`
    align-items: center;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
    box-sizing: border-box;
    color: #121212;
    cursor: pointer;
    display: inline-flex;
    flex: 1 1 auto;
    font-family: Inter,sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    justify-content: center;
    line-height: 1;
    margin: 0;
    outline: none;
    padding: 1rem 1.2rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow .2s,-webkit-box-shadow .2s;
    white-space: nowrap;
    border: 0;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

&:hover {
    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
  }
`
export const StyledDiv = styled.div`
 background-attachment: fixed;
 background: url(https://wallpaperaccess.com/full/910880.jpg) fixed;
 width: 100%;
 height: 100%;
align-content: center;
 background-repeat: no-repeat;
    background-size:100% 100%;
    background-position: center;
    align-content: center;
    justify-content: center;
    background-position: center no-repeat;
    margin: 0 ;
    position: absolute; 
`
export const SubmitButton = styled.button`
padding: 5px 10%;
float: left;
background-color: blueviolet;
border: 1px solid blueviolet;
border-radius: 20px;
margin-left: 20%;
margin-top: 5%;
&:hover{
color: antiquewhite;
}
`