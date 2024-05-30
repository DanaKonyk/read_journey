import styled from 'styled-components';
import color from 'stylesheet/GlobalColors';

export const ItemWrap = styled.div`
  img {
    margin-block-end: 8px;
    border-radius: 8px;
    cursor: pointer;
    inline-size: 137px;
    block-size: 208px;
    transition: filter 350ms linear;

    &:is(:hover, :focus) {
      filter: sepia(80%);
    }
  }
  h4 {
    margin-block-end: 4px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.285;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-inline-size: 95px;
    @media screen and (min-width: 768px) {
      max-inline-size: 89px;
    }
  }
  h5 {
    color: ${color.grey};
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-inline-size: 95px;
    @media screen and (min-width: 768px) {
      max-inline-size: 89px;
    }
  }
`;

export const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BtnDelete = styled.button`
  background-color: transparent;
  border: none;
  svg {
    inline-size: 28px;
    block-size: 28px;
    fill: transparent;
    stroke: #e85050;
    border-radius: 50%;
    padding: 3.5px;
    border: 1px solid rgba(232, 80, 80, 0.2);
    background: rgba(232, 80, 80, 0.1);
    transition: stroke 350ms linear;
  }

  svg:is(:hover, :focus, :active) {
    stroke: ${color.red};
  }
`;
