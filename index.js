import Graph from "./graph.js"


const g = new Graph(5);
g.addEdge(0, 1, 10);
g.addEdge(0, 2, 3);
g.addEdge(2, 1, 1);
g.addEdge(1, 3, 2);
g.addEdge(2, 3, 8);
g.addEdge(3, 4, 7);

console.log(g.hasCycle());

console.log("Shortest path from 0 to 4:", g.shortestPath(0, 4));
console.log("Shortest path from 0 to 3:", g.shortestPath(0, 3));
console.log("Shortest path from 0 to 1:", g.shortestPath(0, 1));