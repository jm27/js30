// When get joke is click fetch joke
export async function handleClick() {
  const { joke } = await fetchJoke(loader);
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(
    buttonText,
    jokeButton.textContent
  );
}
