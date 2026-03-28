import { Handle,Position } from "reactflow";
import "../App.css";

const ResultNode = ({ data }) => {
  return (
    <div className="node-box result-node">
      <strong>Result</strong>
      <div className="result-text">
        {data.response ? (
          data.response
        ) : (
          <span className="placeholder">AI response will appear here...</span>
        )}
      </div>
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default ResultNode;