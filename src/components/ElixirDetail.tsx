import { Elixir } from "@/types";

type ElixirDetailProps = {
  data: Elixir;
};

export default function ElixirDetail({ data }: ElixirDetailProps) {
  return (
    <>
      <h1>{data.name}</h1>
      <p>Effect: {data.effect}</p>
      <p>Side Effects: {data.sideEffects}</p>
      <p>Time: {data.time}</p>
      <p>Difficulty: {data.difficulty}</p>
      <h3>Ingredients:</h3>
      <ul>
      {elixir.ingredients.map((ingredients) => (
              <li key={ingredients.name}>{ingredients.name}</li>
            ))}
      </ul>
      <h3>Inventors:</h3>
      <ul>
      {elixir.inventors.map((inventors) => (
              <li key={inventors.name}>{inventors.name}</li>
            ))}
      </ul>
      <p>Manufacturer: {data.manufacturer}</p>

    </>
  );
}