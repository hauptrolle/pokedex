import { Container, Title } from "@mantine/core";
import { Route, Switch } from "react-router-dom";

import { DetailsPage } from "./pages/details";
import { HomePage } from "./pages/home";

const App = () => {
  return (
    <Container sx={(theme) => ({ paddingTop: theme.spacing.xl })}>
      <Title
        align="center"
        order={1}
        sx={(theme) => ({
          marginBottom: theme.spacing.xl,
          color: "#fff",
          fontFamily: "'Signika', sans-serif",
        })}
      >
        Pokedex
      </Title>

      <Switch>
        <Route path="/:id">
          <DetailsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
