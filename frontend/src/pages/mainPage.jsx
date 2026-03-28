import React, { useState } from "react";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";

import InputNode from "../components/inputNode";
import ResultNode from "../components/resultNode";
import { askAI, saveData, getHistory } from "../services/api";
import "../App.css";

const nodeTypes = {
  inputNode: InputNode,
  resultNode: ResultNode,
};

const MainPage = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [theme, setTheme] = useState("light");
  const nodes = [
    {
      id: "1",
      type: "inputNode",
      position: { x: 50, y: 100 },
      data: {
        value: prompt,
        onChange: setPrompt,
      },
    },
    {
      id: "2",
      type: "resultNode",
      position: { x: 400, y: 100 },
      data: {
        response: response,
      },
    },
  ];

  const edges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
    },
  ];

  const handleRun = async () => {
    try {
      const res = await askAI(prompt);
      setResponse(res.data.response);
    } catch (error) {
      console.error(error);
      alert("Error calling AI");
    }
  };

  const handleSave = async () => {
    try {
      await saveData({ prompt, response });
      alert("Saved successfully!");
    } catch (error) {
      alert("Save failed");
    }
  };
  const handleHistory = async () => {
    try {
      const res = await getHistory();
      setHistory(res.data);
      setShowHistory(true);
    } catch (error) {
      alert("Failed to load history");
    }
  };
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  
  return (
    <div className={`container ${theme}`}>
      <div className="toolbar">
        
        <div className="title"> 
          <img src="/ai.png" alt="logo" className="logo"/>
          
          Future Blink AI</div>

        <div className="button-group">
          <button className="button" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
          <button className="button run-btn" onClick={handleRun}>
            Run Flow
          </button>
          <button className="button save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="button-history" onClick={handleHistory}>
            History
          </button>
        </div>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnScroll={false}
        nodesDraggable={false}
        panOnDrag={false}
      ></ReactFlow>
      {showHistory && (
        <div className="history-panel">
          <div className="history-header">
            <h3> Chat History</h3>
            <button className="close-button"  onClick={() => setShowHistory(false)}>Close</button>
          </div>

          <div className="history-list">
            {history.length === 0 ? (
              <p>No history found</p>
            ) : (
              history.map((item, index) => (
                <div key={index} className="history-item">
                  <strong>Q:</strong> {item.prompt}
                  <br />
                  <strong>A:</strong> {item.response}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
