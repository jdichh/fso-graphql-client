import { useState } from "react";
import { useQuery } from "@apollo/client";
import { FIND_PERSON } from "../graphql/queries";
import Person from "./Person";

const Persons = ({ persons }) => {
  const [nameToSearch, setNameToSearch] = useState(null);
  const result = useQuery(FIND_PERSON, {
    variables: { nameToSearch },
    skip: !nameToSearch,
  });

  if (nameToSearch && result.data) {
    return (
      <Person
        person={result.data.findPerson}
        onClose={() => setNameToSearch(null)}
      />
    );
  } else {
    return (
      <div>
        <h1>Phonebook</h1>
        {persons.map((person) => (
          <div key={person.id}>
            {person.name} - {person.phone ? person.phone : "No phone number."}
            <button onClick={() => setNameToSearch(person.name)}>
              show address
            </button>
          </div>
        ))}
      </div>
    );
  }
};

export default Persons;
