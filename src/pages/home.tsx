import {
  Card,
  Center,
  Group,
  Loader,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSpinDelay } from "spin-delay";

import { usePokemonList } from "../hooks/usePokemonList";

const MotionSimpleGrid = motion(SimpleGrid);
const MotionCard = motion(Card);

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.01,
    },
  },
};

const gridItem = {
  hidden: { opacity: 0, y: +10 },
  show: { opacity: 1, y: 0 },
};

export const HomePage = () => {
  const { data, isLoading } = usePokemonList();
  const showSpinner = useSpinDelay(isLoading, { delay: 500, minDuration: 200 });
  useDocumentTitle("Pokedex");

  if (showSpinner) {
    return (
      <Center>
        <Loader color="red" size="lg" variant="dots" />
      </Center>
    );
  }

  return (
    <>
      {data && (
        <MotionSimpleGrid
          cols={3}
          variants={gridVariants}
          initial="hidden"
          animate="show"
        >
          {data.results.map((pokemon, index) => (
            <MotionCard
              key={index}
              variants={gridItem}
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
