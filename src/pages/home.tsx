import {
  Card,
  Center,
  Group,
  Loader,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { usePokemonList } from "../hooks/usePokemonList";

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

export const HomePage = () => {
  const { data, isLoading } = usePokemonList();

  return (
    <>
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
          {data.results.map((pokemon, index) => (
            <MotionCard
              key={index}
              variants={listItem}
              shadow="sm"
              padding="lg"
              component={Link}
              to={`/${index + 1}`}
              sx={{
                textAlign: "center",
                position: "relative",
              }}
            >
              <Title
                sx={{
                  fontSize: 100,
                  position: "absolute",
                  top: -40,
                  left: -10,
                  opacity: 0.045,
                  fontFamily: "'Signika', sans-serif",
                }}
              >
                {index + 1}
              </Title>
              <Group direction="row">
                <img
                  alt={`Image of ${pokemon.name}`}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/${
                    index + 1
                  }.png`}
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
    </>
  );
};
