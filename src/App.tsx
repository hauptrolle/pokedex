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
import { motion } from "framer-motion";

import { usePokemonList } from "./hooks/usePokemonList";

const MotionSimpleGrid = motion(SimpleGrid);
const MotionCard = motion(Card);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.01,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: +10 },
  show: { opacity: 1, y: 0 },
};

function App() {
  const { data, isLoading } = usePokemonList();

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

      {isLoading && (
        <Center>
          <Loader color="red" size="lg" variant="dots" />
        </Center>
      )}

      {data && (
        <MotionSimpleGrid
          cols={3}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {data.map((pokemon) => (
            <MotionCard
              key={pokemon.id}
              variants={listItem}
              shadow="sm"
              padding="lg"
              sx={{ textAlign: "center" }}
            >
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
            </MotionCard>
          ))}
        </MotionSimpleGrid>
      )}
    </Container>
  );
}

export default App;
