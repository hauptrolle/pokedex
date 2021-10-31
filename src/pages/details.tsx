import { Box, Button, Card, Center, Loader, Table, Title } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useSpinDelay } from "spin-delay";

import { usePokemon } from "../hooks/usePokemon";

const MotionCard = motion(Card);

const cardVariants = {
  hidden: { opacity: 0, y: +10 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = usePokemon(id);
  const showSpinner = useSpinDelay(isLoading, { delay: 500, minDuration: 200 });
  useDocumentTitle(`Pokedex - ${data?.name}`);

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
        <MotionCard variants={cardVariants} initial="hidden" animate="show">
          <Button variant="light" component={Link} to={"/"}>
            Back to overview
          </Button>
          <Box sx={{ textAlign: "center" }}>
            <img
              alt={`Image of ${data.name}`}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/${data.id}.png`}
              width={64}
              height={64}
            />
          </Box>

          <Title
            order={2}
            align="center"
            sx={(theme) => ({
              textTransform: "capitalize",
              marginBottom: theme.spacing.xl,
            })}
          >
            {data.name}
          </Title>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Stat</th>
                <th>Effort</th>
              </tr>
            </thead>
            <tbody>
              {data.stats.map((stat) => (
                <tr key={stat.stat.name}>
                  <td>{stat.stat.name}</td>
                  <td>{stat.base_stat}</td>
                  <td>{stat.effort}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </MotionCard>
      )}
    </>
  );
};
