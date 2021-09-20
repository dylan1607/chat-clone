export default {
  id: "1",
  users: [
    {
      id: "u1",
      name: "Vadim",
      imageUri:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: "u2",
      name: "Lukas",
      imageUri:
        "https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  ],
  messages: [
    {
      id: "m1",
      content: "How are you, Lukas!",
      createdAt: "2021-09-20T12:18:00.000Z",
      user: {
        id: "u1",
        name: "Vadim",
      },
    },
    {
      id: "m2",
      content: "I am good, good",
      createdAt: "2020-10-03T14:49:00.000Z",
      user: {
        id: "u2",
        name: "Lukas",
      },
    },
    {
      id: "m3",
      content: "What about you?",
      createdAt: "2020-10-03T14:49:40.000Z",
      user: {
        id: "u2",
        name: "Lukas",
      },
    },
    {
      id: "m4",
      content: "Good as well, preparing for the stream now.",
      createdAt: "2020-10-03T14:50:00.000Z",
      user: {
        id: "u1",
        name: "Vadim",
      },
    },
    {
      id: "m5",
      content: "How is your uni going?",
      createdAt: "2020-10-03T14:51:00.000Z",
      user: {
        id: "u1",
        name: "Vadim",
      },
    },
    {
      id: "m6",
      content:
        "It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?",
      createdAt: "2020-10-03T14:49:00.000Z",
      user: {
        id: "u2",
        name: "Lukas",
      },
    },
    {
      id: "m7",
      content:
        "Big Data is really interesting. Cannot wait to go through all the material.",
      createdAt: "2020-10-03T14:53:00.000Z",
      user: {
        id: "u1",
        name: "Vadim",
      },
    },
  ],
};
