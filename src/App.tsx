import { Title, Container, SimpleGrid, Card, Text, Group } from "@mantine/core";

import { usePokemonList } from "./hooks/usePokemonList";

function App() {
  const { data } = usePokemonList();

  return (
    <Container>
      <Title align="center" order={1}>
        Pokedex
      </Title>
      <SimpleGrid cols={4}>
        {data?.map((p) => (
          <Card shadow="sm" padding="lg" sx={{ textAlign: "center" }}>
            <Group>
              <img
                alt={`Image of ${p.name}`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/${p.id}.png`}
                width={64}
                height={64}
              />

              <Text weight={500} sx={{ textTransform: "capitalize" }}>
                {p.name}
              </Text>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default App;
