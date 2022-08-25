export const MathApi = () => {
  const config = {
    headers: {
      accept: "application/json",
    },
  };
  return fetch("http://numbersapi.com/random/math", config).then((res) =>
    res.text()
  );
}
