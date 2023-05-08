const { Env } = require("./env");

/**@return {Promise<import("./RespGetAuth").RespAuth>} */
module.exports.getAuth = async function getAuth() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("accept", "application/json");
  myHeaders.append("Authorization", `Basic ${Env.token}`);

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
  };

  const resp = await fetch("https://api.getmati.com/oauth", requestOptions)

  if (resp.status >= 400) throw new Error("Bad Request exception")

  const json = await resp.json()

  return json
}
