import React from "react";
import { useUser } from "../services/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  // load authenticated user
  const { user, isLoading } = useUser();

  // while loading show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // if no authenticated user redirect to login

  return <>{children}</>;
}

export default ProtectedRoute;
