import styled from 'styled-components';

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', sans-serif;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  width: 4rem;
  overflow: hidden;
  padding: 2rem 0;
  display: flex;
  justify-content: center;

  color: ${({ theme }) => theme['green-500']};
`;
