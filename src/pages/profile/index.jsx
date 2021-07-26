import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100vh;
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: column;
  background-color: #101010;
  justify-content: center;
`;

const DescPerfil = styled.div`
  width: 275px;
  color: white;
  padding: 1em 2em;
  font-weight: 700;
  border-radius: 25px;
  text-align: justify;
  background-color: #191919;
  text-shadow: 1px 1px 3px #3a3a3a;
  box-shadow: 2px 2px 0px #3a3a3a, -2px -2px 0px #7d7d7d;
`;

const Foto = ({ className }) => (
  <img
    className={className}
    src="https://media-exp1.licdn.com/dms/image/C5603AQGrSuQk62IaKw/profile-displayphoto-shrink_200_200/0/1610460903289?e=1632355200&v=beta&t=8O2HY-TGzCxUrRKOUZ-9s48ZALkx3bw_FgpHgHusLK8"
    alt="Foto de perfil"
  />
);

const FotoPerfil = styled(Foto)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: contain;
`;

const Nome = ({ className }) => <h1 className={className}>João Pedro</h1>;

const NomePerfil = styled(Nome)`
  color: white;
  text-shadow: 3px 3px 0px #3a3a3a;
  border-radius: 25px 5px 25px 5px;
`;

const Profile = () => {
  return (
    <Container>
      <FotoPerfil />
      <NomePerfil />
      <DescPerfil>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </DescPerfil>
    </Container>
  );
};

export default Profile;
