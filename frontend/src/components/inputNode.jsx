import {Handle, Position} from "reactflow";
import "../App.css";
const InputNode = ({ data }) => {
  return (
    <div className="node-box input-node">
      <textarea
        className="textarea"
        placeholder="Ask something..."
        value={data.value}
        onChange={(e) => data.onChange(e.target.value)}
      />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default InputNode;
