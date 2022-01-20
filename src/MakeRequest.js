/* MAKEREQUEST FUNKTION FÖR ALLA FILER */

export default async function MakeRequest(url, method, body) {

  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      method,
      body: JSON.stringify(body)
    });
    const result = await response.json();
    return result;

  } catch (err) {
    console.error(err);

  }
}
