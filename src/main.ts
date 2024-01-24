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

//main();

/*
const addNumbers = (a: number, b: number) => {
    
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  
  });
  
  
};

let getResult = async (a: number, b: number) => {
    let value = await addNumbers(a, b);
    console.log(value);
};

getResult(3, 3);

*/
function f(x: any, y: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x === y) {
        resolve(`${x} === ${y}`);
      } else {
        reject(`${x} !== ${y}`);
      }
    }, 3000);
  });
}

console.log("Starting ...");
f(0, 0)
  .then((s) => {
    console.log(s);
  })
  .catch((s) => {
    console.error(s);
  })
  .finally(() => {
    console.log("Done!");
  });

console.log("Starting ...");
async function g(x: any, y: any) {
  try {
    const s = await f(x, y);
    console.log(s);
  } catch (s) {
    console.error(s);
  } finally {
    console.log("Done!");
  }
}

g(0, "0");
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
