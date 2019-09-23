## Idea
This boilerplate is created to speed up prototyping and avoid project configuration pain. It should be used only
 for educational purposes and pet projects.
 
## How to run
Start mocked local server by:
```
node api-server.js
```

Open new terminal/command line tab and type following commands:
```
yarn install
yarn start
```
Navigate to `http://localhost:9000/`

To create dev/production build use following commands accordingly: 
```
yarn build-dev
yarn build-prod
```

To run lint:
```
yarn lint
```

To run tests:
```
yarn test
```

In case if yarn command is not found:
```
brew install yarn
```

For details visit [yarn docs](https://yarnpkg.com/en/docs/install#mac-stable) or you can use `npm` instead.


## Sample project
It is included: 
- an implementation of a basic table with getting data from a local server (api-server.js)
- usage of [Atlaskit](https://atlaskit.atlassian.com/packages) UI library to display spinners and error messages

## API
`API_DOCS.md` can be used for documenting API endpoints 

## Useful docs
- [React](https://reactjs.org/)
- [styled-components](https://www.styled-components.com/)
- [Webpack](https://webpack.js.org/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [Enzyme](https://airbnb.io/enzyme/)
- [Node.js](https://nodejs.org/en/)
