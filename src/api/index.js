export const postRequestToAddComment = (url, values) => {
  const response = fetch(url, {
    method: "POST",
    body: JSON.stringify({
      body: values.body,
      email: values.email,
      name: values.name,
      postId: values.postId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return { data: response.json(), status: response.status };
    })
    .catch((error) => error);

  return response;
};
