async function shortenUrl() {
  const longUrl = document.getElementById("longUrl").value;
  const response = await fetch("/url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url: longUrl })
  });

  const data = await response.json();

  const resultDiv = document.getElementById("result");
  if (data.id) {
    const shortUrl = `${window.location.origin}/${data.id}`;
    resultDiv.innerHTML = `Short URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
  } else {
    resultDiv.innerHTML = "Error: " + (data.error || "Something went wrong");
  }
}
