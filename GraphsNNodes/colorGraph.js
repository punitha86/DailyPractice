class GraphNode {
constructor(label) {
  this.label = label;
  this.neighbors = new Set();
  this.color = null;
}
}

const a = new GraphNode('a');
const b = new GraphNode('b');
const c = new GraphNode('c');

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

const graph = [a, b, c];
console.log(graph);


const graphColor =(graph,colors)=>{

  graph.forEach(node => {

        if(node.neighbors.has(node)){
          console.log("error as its a loop. impossible to color");
        }

        const colorsAlreadyInUse = new Set();

        node.neighbors.forEach(neighbor => {

          if(neighbor.color!=null){
            illegalColors.add(neighbour.color)
          }
        });

          for(let i=0;i<colors.length; i++){
            if(!illegalColors.has(colors[i])){
              node.color=colors[i];
              break;
            }
          }

  })

}
