/*
import { schema } from "./schema";
import { execute, parse } from "graphql";

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

import { schema } from "./schema";
import { createYoga } from "graphql-yoga";
import { createServer } from "http";

function main() {
  const yoga = createYoga({ schema });
  const server = createServer(yoga);
  server.listen(4000, () => {
    console.info("Server is running on http://localhost:4000/graphql");
  });
}

main();