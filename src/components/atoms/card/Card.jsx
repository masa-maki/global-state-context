import React from 'react';
import styled from 'styled-components';

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 0.5rem;
  padding: 1rem;
`;
