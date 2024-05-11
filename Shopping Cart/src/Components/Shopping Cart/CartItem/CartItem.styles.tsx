import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid black;
  padding: 20px 0;

  div {
    flex: 1;
  }

  .info, .buttons{
    display: flex;
    justify-content: space-between;
  }

  button{
    background: #c7c8ccda;
    color: black;
    font-weight: 600;
    font-size: 18px
  }

  button:hover{
    background-color: rgba(120, 118, 95, 0.5);
    
  }

  img{
    max-width: 100px;
    object-fit: cover;
    margin-left: 36px;
  }
`;
