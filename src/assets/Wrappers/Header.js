import styled from "styled-components";

const Wrapper = styled.section`
  padding: 1.5rem;

  .header-content {
    border-bottom: 1px solid var(--Dark-Grayish-Blue-Text);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    h1 {
      margin-bottom: 0.5rem;
      color: var(--Very-Dark-Blue-Text);
      font-weight: 700;
    }
    p {
      color: var(--Dark-Grayish-Blue-Text);
    }
    h4 {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }
  }
  .toggleTheme {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
  }
  .button {
    border: none;
    font-size: 1.3rem;
    margin-top: 0.5rem;
    background-color: transparent;
    cursor: pointer;
  }
  .dark-btn {
    color: hsl(146, 68%, 55%);
  }
  @media screen and (min-width: 986px) {
    header {
      display: flex;
      justify-content: space-between;
    }
    .header-content {
      border-bottom: none;
    }
  }
`;
export default Wrapper;
