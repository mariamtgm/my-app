import Link from "next/link";
import { House } from "@/types";

type HousesListProps = {
  data: Array<House>;
};

export default function HousesList({ data }: HousesListProps) {
  return (
    <div>
      {data.map((house) => (
        <div key={house.id}>
          <h2>{house.name}</h2>
          <p>House colours: {house.houseColours}</p>
          <p>Founder: {house.founder}</p>
          <p>Animal: {house.animal}</p>
          <p>Element: {house.element}</p>
          <p>Ghost: {house.ghost}</p>
          <p>Common room: {house.commonRoom}</p>
          <h3>Heads</h3>
          <ul>
            {house.heads.map((head) => (
              <li key={head.name}>
                <Link href={`/wizard/${head.name}`}>
                  <a>{head.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <h3>Traits</h3>
          <ul>
            {house.traits.map((traits) => (
              <li key={traits.name}>{traits.name}</li>
            ))}
          </ul>   
        </div>
      ))}
    </div>
  );
}
