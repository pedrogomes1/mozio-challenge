## :memo: About

The main objective of this application it's searching travel destinations. Users should be able to search for destinations and view details about them. Additionally, it was implemented an algorithm to suggest nearby destinations based on the selected destination.


## :clipboard: Requirements

1. Destination Search: Allow users to search for travel destinations by name (the data is provided).
2. Display detailed information about the selected destination, including its name, description, and top 5 nearby destinations.
3. Implement an asynchronous combobox for the destination search that fetches and displays matching destination names from a fake API.
4. The fake API must only return the destination based on the user query, which means you cannot fetch all destinations at once.
5. You can create a file called fake-api.ts and export the async functions as fake APIs. Please console.log the arguments of all fake API functions.
6. Clicking on the nearby destinations should show the details of the selected destination and its nearby destinations.
7. Implement error handling for API requests. When the user enters ‘fail’, the front end should mimic a backend error case and show an error message near Combobox.
8. Add loading indicators during data fetching.
9. The Combobox should be keyboard-accessible.
10. Implement client-side caching.
11. Debounce user input.
12. Make use of modern accessible UI libraries.
13. Deep link to the current state.

---


## 🚀 Main techs

- [Reactjs](https://reactjs.org/)
- [Vitejs](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Redux](https://testing-library.com/docs/react-testing-library/intro/](https://redux.js.org/))

---

## :heavy_check_mark: Results:

[Click here](https://mozio-challenge-destinations.vercel.app/) to run the application.

---

Made by [Pedro Gomes](https://www.linkedin.com/in/pedro-henrique-gomes-barbosa/) ! 💙
