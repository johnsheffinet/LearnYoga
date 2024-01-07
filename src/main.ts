/*
import { execute, parse } from "graphql";
import { schema } from "./schema";

async function main() {
  const myQuery = parse(`
    query {
      hello
    }
  `);

  const result = await execute({
    schema,
    document: myQuery,
  });

  console.log(result);
}

main();
*/

import { createServer } from "http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";

function main() {
  const yoga = createYoga({ schema });
  const server = createServer(yoga);
  server.listen(4000, () => {
    console.info("Server is running on http://localhost:4000/graphql");
  });
}

main();
