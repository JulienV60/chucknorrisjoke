import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${context.params.category}`
  );
  const joke = await response.json();

  return {
    props: {
      joke: joke.value,
    },
  };
};
type PageProps = {
  joke: string;
};

const Page: React.FC<PageProps> = ({ joke }) => {
  return <div>{joke}</div>;
};
export default Page;
