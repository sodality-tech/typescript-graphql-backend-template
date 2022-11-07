TypeScript Backend Template

## How to use this template?

This template makes assumptions about your environment. Most required software is defined in the `Brewfile`.

Run `just setup` to install Homebrew dependencies.

This repo assumes you have `asdf` to manage your installed version of Node.js. If so, run `asdf install` to ensure you have the correct version installed. If not, install Node.js version 19.x with your preferred method.

## Developing

- `just dev` - starts the development server
- `just debug` - starts the debug server
- `just test` - runs the unit tests
- `just gen` - generates TypeScript code based on your GraphQL schema

## Project Structure

The entrypoint to the app is the `src/server.ts` file. If your app needs workers, the entrypoint is `src/worker.ts`.

### GraphQL

All of the GraphQL layer is encapsulated in the `src/graphql` folder. It exports an executable schema and a full structure of resolvers.

When writing resolvers, create a folder in the `graphql/resolvers` directory with the name of the type. The repo contains an example of the structure via the User type.

A general rule of thumb is that the "owner" of a given query or mutation is the type that it returns.

When writing queries, they should be written declaratively, **without the prefix 'get'**. That way the generated code and the client code read a lot clearer.

Whenever possible, try to reduce the number of conditional branches inside of a resolver. Rather than have a single resolver handle many cases, prefer to create additional queries or mutations for those scenarios.

### Service

The service layer is where all of the app's business logic lives. This is where you can create folders based around the features of an application. In fact, you're free to structure this folder however you'd like.

Ideally, the service layer is the only layer that interacts with the database via models or raw queries. The GraphQL layer should use exported methods of the service layer to accomplish it's work, but otherwise remain thin.
