import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  width: 90%;
  margin: 5% auto 0%;
  border: 1px solid rgba(9, 9, 121, 1);
  border-radius: 3px;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start:
  justify-content: space-evenly;
  box-shadow: 0px 1px 6px -2px rgba(9, 9, 121, 1);
  background-color: white;
  color: #090979;
`;

const FormContainer = styled.div`
  width: 90%;
  margin: 2% auto 0%;
  border: 1px solid rgba(9, 9, 121, 1);
  border-radius: 3px;
  padding: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 2.6rem;
  box-shadow: 0px 1px 6px -2px rgba(9, 9, 121, 1);
  background-color: white;
  color: #090979;
`;

const Header = styled.header`
  width: 100%;
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  border-bottom: 2px solid rgba(9, 9, 121, 1);
  background-color: white;
  color: #090979;
  padding-bottom: 2%;
`;

const BodyContainer = styled.div`
  width: 90%;
  max-width: 800px;
  padding: 2%;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #090979;
  border-radius: 5px;
  box-shadow: 0px 1px 4px -2px #090979;
  background-color: white;
`;

const FormSubDiv = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const Errors = styled(motion.div)`
  color: red;
  font-size: 0.8rem;
`;

const Button = styled.button`
  box-shadow: 0px 0px 5px -1px #090979;
  background-color: transparent;
  border-radius: 28px;
  border: 1px solid #090979;
  display: inline-block;
  cursor: pointer;
  color: #090979;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  margin: 2%;
`;

export {
  Card,
  Header,
  BodyContainer,
  FormContainer,
  FormSubDiv,
  Errors,
  Button,
};
