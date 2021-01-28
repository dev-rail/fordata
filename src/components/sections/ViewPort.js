import handleViewport from "react-in-viewport";

const Block = (props) => {
  const { inViewport, forwardedRef } = props;
  const color = inViewport ? "#217ac0" : "#ff9800";
  const text = inViewport ? "In viewport" : "Not in viewport";
  return (
    <div className="viewport-block" ref={forwardedRef}>
      <h3>{text}</h3>
      <div style={{ width: "400px", height: "300px", background: color }} />
    </div>
  );
};

const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

export const Component = (props) => (
  <div>
    <div style={{ height: "100vh" }}>
      <h2>Scroll down to make component in viewport</h2>
    </div>
    <ViewportBlock
      onEnterViewport={() => console.log("enter")}
      onLeaveViewport={() => console.log("leave")}
    />
  </div>
);
