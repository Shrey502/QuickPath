function dijkstra(nodes, edges, source, target) {
    const graph = {};
    nodes.forEach(node => graph[node] = []);
  
    edges.forEach(({ from, to, weight }) => {
      graph[from].push({ node: to, weight });
      graph[to].push({ node: from, weight });
    });
  
    const distances = {};
    const prev = {};
    const visited = new Set();
    nodes.forEach(node => distances[node] = Infinity);
    distances[source] = 0;
  
    while (visited.size < nodes.length) {
      const unvisitedNodes = Object.keys(distances)
        .filter(n => !visited.has(n))
        .sort((a, b) => distances[a] - distances[b]);
      
      const current = unvisitedNodes[0];
      visited.add(current);
  
      graph[current].forEach(neighbor => {
        const alt = distances[current] + neighbor.weight;
        if (alt < distances[neighbor.node]) {
          distances[neighbor.node] = alt;
          prev[neighbor.node] = current;
        }
      });
    }
  
    const path = [];
    let u = target;
    while (u) {
      path.unshift(u);
      u = prev[u];
    }
  
    return {
      path,
      totalWeight: distances[target]
    };
  }
  
  module.exports = dijkstra;

  