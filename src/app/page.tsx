import { TreeGrid } from "./components/TreeGrid";
import { tree } from "./tree-content";

export default function Home() {
  return (
    <div> <TreeGrid title={tree.title} nodes={tree.children} />
    </div>
  );
}
