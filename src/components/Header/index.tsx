import {
  Container,
  Logo,
  Navigation,
  NavOption,
  NavLabel,
  ResumeButton,
} from "./styles";

const Header: React.FC = () => {
  const navList = [
    { name: "<Intro />", path: "/" },
    {
      name: "<About />",
      path: "/about",
    },
  ];

  return (
    <Container>
      <Logo src={require("../../assets/logo.png")} alt="Zacarias Logo" />
      <Navigation>
        {navList.map((item) => (
          <NavOption key={item.name} to={item.path}>
            <NavLabel>{item.name}</NavLabel>
          </NavOption>
        ))}
        <ResumeButton href="#">Resume</ResumeButton>
      </Navigation>
    </Container>
  );
};

export default Header;
