import PriorityQueue from "../priorityQueue.js";

class Graph {
    constructor (vertexCount) {
        this.vertexCount = vertexCount;
    }

    list = []; 

    addEdge(u,v,w) {
        this.list.push([u,v,w]);
    }

    hasCycle() {
        const graph = Array.from({length: this.vertexCount}, () => []);
        const indegree = new Array(this.vertexCount).fill(0);

        for (let [u,v,w] of this.list) {
            graph[u].push(v);
            ++indegree[v];
        }
    
        const queue = [];
        let count = 0;

        for (let i = 0; i < this.vertexCount; ++i) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }
    
        while (queue.length) {
            const vertex = queue.shift();
            ++count;

            const neighbours = graph[vertex];

            for (let n of neighbours) {
                --indegree[n];
                if (indegree[n] === 0) {
                    queue.push(n);
                }
            }
        }

        return count !== this.vertexCount;
    }

    shortestPath(u,v) {
        const costs = {};
        const visited = new Set();
        const queue = new PriorityQueue();

        for (let v = 0; v < this.vertexCount; ++v) {
            costs[v] = Infinity;
        }

        costs[u] = 0;
        queue.insert(u, 0);

        while (!queue.isEmpty()) {
            const {item: i, priority: cost} = queue.shift();
            if (visited.has(i)) continue;
            visited.add(i); 

            for (let [u,v,w] of this.list) {
                
                if (u === i) {
                    if (cost + w < costs[v] ) {
                        costs[v] = cost + w;
                        queue.insert(v, costs[v]);
                    }
               }
            }
        }
        return costs[v];
    }
}   

export default Graph;
