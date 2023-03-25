import Link from "next/link";
import { Wizard } from "@/types";

type WizardsListProps = {
  data: Array<Wizard>;
};

export default function WizardsList({ data }: WizardsListProps) {
  return (
    <div>
      {data.map((wizard) => (
        <div key={wizard.id}>
          <h2>
            <Link href={`/wizard/${wizard.id}`}>{wizard.name}
            </Link>
          </h2>
          <p>First Name: {wizard.firstName}</p>
          <p>Last Name: {wizard.firstName}</p>
          <h3>Elixirs:</h3>
          <ul>
            {wizard.elixirs.map((elixirs) => (
              <li key={elixirs.name}>{elixirs.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
