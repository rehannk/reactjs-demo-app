import axios from "axios";

const asyncFunc = async () => {
    var data = [];
    await axios
    .get(`http://jsonplaceholder.typicode.com/users`)
    .then((result) => {
        data = result.data;
    })
    .catch((error) => {
      console.log(error);
    });
    return data;
}

export default asyncFunc;
