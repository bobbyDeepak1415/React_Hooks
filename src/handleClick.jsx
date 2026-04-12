const handleClick = ({ props }) => {
  const setNames = props.setNames;
  const title = props.title;
  const names = props.names;
  const setTitle = props.setTitle;

  setNames([...names, title]);
  setTitle("");
};

export default handleClick;
