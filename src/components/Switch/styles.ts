import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 25px;

  left: 212px;
  bottom: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: #ccc;

    transition: background-color 0.4s;
  }

  .slider::before {
    position: absolute;

    content: '';

    height: 15px;
    width: 15px;
    left: 5px;
    bottom: 5px;

    background-color: white;

    transition: transform 0.4s;
  }

  input:checked + .slider {
    background-color: #149414;
  }

  input:checked + .slider::before {
    transform: translateX(20px);
  }
`;
