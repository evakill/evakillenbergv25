import { TreeGrid } from "./components/TreeGrid";
import { tree } from "./tree-content";

export default function Home() {
  return (
    <div> <TreeGrid title="Eva" nodes={tree.children} />
    </div>
  );
}
