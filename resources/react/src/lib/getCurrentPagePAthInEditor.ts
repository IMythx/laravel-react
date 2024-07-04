const getCurrentPagePathInEditor = (pathname: string): string => {
  const getCurrentPagePathInEditor = pathname.split("/");
  getCurrentPagePathInEditor.pop();
  getCurrentPagePathInEditor.shift();
  return getCurrentPagePathInEditor[0] ?? "/";
};

export default getCurrentPagePathInEditor;
