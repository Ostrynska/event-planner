import styled from 'styled-components';

export const PaginationWrapp = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  margin-top: 42px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const PaginationList = styled.ul`
  display: flex;
  gap: 20px;
  li {
    padding: 19px 1px 18px 1px;
    justify-content: center;
    align-items: center;
  }
`;
