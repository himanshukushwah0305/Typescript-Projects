import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 20px;
  flex-direction: column;

  button {
    border-radius: 0 0 20px 20px;
    background: #C7C8CC;
    color: black;
    padding: 12px 0;
    font-size: 16px;
    font-weight: 600;
  }

  button:hover{
    background-color: rgba(120, 118, 95, 0.5);
  }

  img {
    max-height: 240px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div{
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
  }
`;
