import { useParams } from "react-router-dom";

export const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  return <>details page {id}</>;
};
