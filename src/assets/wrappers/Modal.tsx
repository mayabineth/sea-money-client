import styled from "styled-components";

const Wrapper = styled.aside`
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal {
    border-radius: var(--borderRadius);
    background: var(--white);
    box-shadow: var(--shadow-2);
    width: 80vw;
    max-width: 800px;
    padding: 2rem 1rem;
    text-align: center;
  }
  .big-modal {
    max-width: 500px;
  }
  .modal h4 {
    margin-bottom: 0;
    line-height: 1.5;
  }
  .modal .cancel-btn,
  .modal .submit-btn {
    margin-top: 1rem;
  }
  /* .btn-container {
    display: flex;
    justify-content: space-around;
  } */

  //form
  /* .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  } */
  .form-label {
    text-align: left;
    display: block;
    font-size: var(--smallText);
    margin-bottom: 0rem;
    margin-left: 0.1rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: flex;
    gap: 0.5rem;
  }
  /* .btn-block {
    width: 90%;
  } */
  .cancel-btn,
  .submit-btn {
    width: 50%;
  }
  .cancel-btn {
    background: var(--grey-500);
  }
  .cancel-btn:hover {
    background: var(--black);
  }
  .line-down {
    border-bottom: 1px solid var(--grey-100);
    margin-bottom: 0.5rem;
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;
export default Wrapper;
