import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 20px;
    font-weight: 600;
  }

  .grid{
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(3, 1fr);
  }

  .reset{
    width: 300px;
    margin-top: 2rem;
    font-size: 1.3rem;
    background-color: #008bd3;
    border: none;
    padding: 12px 16px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
