import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .msgs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .msg {
    background: var(--white);
    border-radius: var(--borderRadius);
    display: grid;
    grid-template-rows: 1fr auto;
    box-shadow: var(--shadow-2);
    letter-spacing: var(--letterSpacing);
  }
  .header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    font-weight: bold;
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .cons {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
  .con {
    background: var(--white);
    border-radius: var(--borderRadius);
    grid-template-rows: 1fr auto;
    box-shadow: var(--shadow-2);
    letter-spacing: var(--letterSpacing);
    font-size: 1.2rem;
  }
  .con:hover {
    cursor: pointer;
    background: var(--grey-50);
    color: var(--grey-900);
  }
  .icon {
    font-size: 1.5rem;
    margin: 1rem;
    transition: var(--transition);
  }
  .connection {
    letter-spacing: var(--letterSpacing);
  }
  .add-btn {
    width: 100%;
    margin-bottom: 1rem;
  }
  @media (min-width: 992px) {
    .msgs {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Wrapper;
