import ElixirComponent from "@/components/Elixir";
import { Elixir, ElixirAPI } from "@/types";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<{elixir: Elixir}> = async (context) => {
    const { id } = context.query;
  
    const res = await fetch(`https://wizard-world-api.herokuapp.com/Elixirs/${id}`);
    const dataAPI: ElixirAPI = await res.json();
    const elixir: Elixir = {
      ...dataAPI,
    };
  
    return {
      props: {
        elixir,
      },
    };
  };
  
  const ElixirPage = ({ elixir }: { elixir: Elixir }) => {
    return <ElixirComponent data={elixir} />;
  };
  
  export default ElixirPage;