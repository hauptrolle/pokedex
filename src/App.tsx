import {
  Card,
  Center,
  Container,
  Group,
  Loader,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

import { usePokemonList } from "./hooks/usePokemonList";

function App() {
  const { data, isLoading } = usePokemonList();

  return (
    <Container>
      <Title
        align="center"
        order={1}
        sx={(theme) => ({
          marginBottom: theme.spacing.xl,
        })}
      >
        Pokedex
      </Title>

      {isLoading && (
        <Center>
          <Loader color="red" size="lg" variant="dots" />
        </Center>
      )}

      <SimpleGrid cols={4}>
        {data?.map((pokemon) => (
          <Card shadow="sm" padding="lg" sx={{ textAlign: "center" }}>
            <Group>
              <img
                alt={`Image of ${pokemon.name}`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/${pokemon.id}.png`}
                width={64}
                height={64}
              />

              <Text weight={500} sx={{ textTransform: "capitalize" }}>
                {pokemon.name}
              </Text>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default App;
