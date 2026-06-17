export default async function getData(name) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  try {
    const repsonse = await fetch(url); // wait till fetch resolves and returns a response object
    if (!repsonse.ok) {
      throw new Error(`Response Status : ${repsonse.status}`);
    }

    const result = await repsonse.json(); // wait till stuff(body

    const name = await result.forms[0].name;
    const sprite = result.sprites.front_default;

    const cardData = {
      name: name,
      sprite: sprite,
    };

    return cardData;
  } catch (error) {
    console.error(error.message);
  }
}
