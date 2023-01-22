export async function catFacts() {
    const url = 'https://meowfacts.herokuapp.com/?count=1';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data);
    return data.data;
}

export async function catImg() {
    const url = 'https://cataas.com/cat/cute';
    const response = await fetch(url);
    const data = response.url;
    return data;
}

export async function translate(text) {
    const url = `https://script.google.com/macros/s/AKfycbzwD0XK2x3BwNbudIgpQ0IaNR8eNgPFJ2_shj3xHswdlxqMNRibvklrN97eDhXqIYYr7g/exec?text=${text}&source=en&target=ja`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.text);
    return data.text;
}
