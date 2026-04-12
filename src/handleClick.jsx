export const handleClick = (setNames, title, names, setTitle) => {
  setNames([...names, title]);
  setTitle("");
};
