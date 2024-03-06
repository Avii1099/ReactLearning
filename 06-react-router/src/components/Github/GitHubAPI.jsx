export const gitHubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Avii1099');
  return response.json();
};
