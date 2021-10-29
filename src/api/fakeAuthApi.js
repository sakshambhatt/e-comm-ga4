export const Users = [
  {
    username: "test",
    password: "test123*"
  },
  {
    username: "test1",
    password: "test1231*"
  },
  {
    username: "test2",
    password: "test1232*"
  }
];
const findUsersByUsername = (username) => {
  return Users.find((user) => user.username === username);
};
export default function fakeAuthApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = findUsersByUsername(username);
      //I used optional chaining. Yay!
      if (user?.password === password) {
        resolve({ success: true, status: 200 });
      }
      reject({ success: false, status: 401 });
    }, 1500);
  });
}
