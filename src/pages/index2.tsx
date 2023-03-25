
import HousesList from "@/components/HousesList";
import type { Houses } from '@/types';
import { HousesAPI, WizardsAPI, ElixirsAPI, HouseAPI } from "@/types";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<{houses: Houses[]}> = async () => {
  const houses: Houses[] = [];

  try {
    const res = await fetch("https://wizard-world-api.herokuapp.com/houses");
    const data: HouseAPI[] = await res.json();

    houses.push(
      ...data.map((house) => {
        const id = house.id;
        const name = house.name;
        const houseCoulours = house.houseColours
        const founder = house.founder;
        const animal = house.animal;
        const element= house.element;
        const ghost = house.ghost;
        const commonRoom = house.commonRoom;
        const heads = house.heads;
        const traits = house.traits;

        return {
          id,
          name,
          houseCoulours,
          founder,
          animal,
          element,
          ghost,
          commonRoom,
          heads,
          traits,
        };
      })
    );

    return {
      props : {
        houses
      }
    }
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
        houses: [],
    },
  };
};

type HomeProps = {
    houses: Array<{
        name: string;
        id: string;
      }>;
};

export default function Home(props: HomeProps) {
  return <HousesList data={props.houses} />;
}
