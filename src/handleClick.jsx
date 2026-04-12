const handleClick = (setNames, title, names, setTitle) => {
  setNames([...names, title]);
  setTitle("");
};

export default handleClick;
