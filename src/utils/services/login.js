const ENDPOINT = `https://localhost:7106/api`;

export default function login(email, contrasenna) {
  return (
    fetch(`${ENDPOINT}/LogIn/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, contrasenna }),
    })
      .then((response) => response.text())
      // .then((response) => {
      //   if (!response.ok) throw new Error("Response is NOT ok");
      //   response.text();
      // });
      .then((result) => {
        const { jwt } = result;
        window.sessionStorage.setItem("token", result);
        return result;
      })
  );
}
