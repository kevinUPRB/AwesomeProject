export function action() {


    //GET API
    // fetch('http://192.168.0.25:1337/message')
    // .then((response) => response.json())
    // .then((responseJson) => {

    //  console.log(responseJson);

    // })
    // .catch((error) =>{
    //   console.error(error);
    // });

    //POST API
    fetch('http://192.168.0.25:1337/user/login', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: "Aqui necesito el email del input",
    password: "Aqui necesito el password del input"
  }),
}).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
}