module.exports.getValidation = async function getValidation({token, idValidation}) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const resp = await fetch(`https://api.getmati.com/v2/verifications/${idValidation}`, requestOptions)

  if (resp.status >= 400) throw new Error("Bad Request exception")

  const json = await resp.json()

  return json
}