import styled from 'styled-components';

const StyleHeader = styled.div`
    * {
      text-decoration: none;
      /* border: 1px solid black; */
    }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    padding: 5vh 4vw 0 0;
    li {
      list-style: none;
      border: none;
      width: 6vw;
      text-align: center;
      .main_cat {
        color: black;
        font-family: 'Roboto';
        font-size: 20px;
        font-weight: bold;
      }
    }
      li::after {
        content: '';
        font-family: 'Roboto';
        border-bottom: black solid 2px;
        display: block;
        height: 5px;
        text-decoration: none;
        width: 0%;
        transition: 0.2s ease-in-out;
      }
      li:hover::after {
        content: '';
        display: block;
        text-decoration: none;
        width: 100%;
      }
    }
    img {
      width: 10vw;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      padding-bottom: 2vh;

    }
  }
`;

export default StyleHeader;
