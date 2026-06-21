export default async function getData(name) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  try {
    const repsonse = await fetch(url);
    if (!repsonse.ok) {
      throw new Error(`Response Status : ${repsonse.status}`);
    }

    const result = await repsonse.json();

    const name = await result.forms[0].name;
    const sprite = await result.sprites.front_default;
    const type = await result.types[0].type.name;

    const cardData = {
      name: name,
      type: type,
      sprite: sprite,
      id: crypto.randomUUID(), // adding here is ok i hope
    };

    return cardData;
  } catch (error) {
    console.error(error.message);
  }
}
