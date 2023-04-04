import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  & > input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    height: 4rem;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }
`

export const DropdownContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 4.2rem;
  width: 300px;
  max-height: 400px;
  background: ${(props) => props.theme['gray-600']};
  overflow: auto;

  & > ul {
    list-style-type: none;

    & > li {
      display: flex;

      & > button {
        flex: 1;

        display: flex;
        flex-direction: column;

        color: ${(props) => props.theme.white};
        border: 0;
        background: transparent;
        padding: 1rem;
        cursor: pointer;

        &:hover {
          background: ${(props) => props.theme['green-700']};
          transition: background-color 0.2s;
        }
      }
    }
  }
`
