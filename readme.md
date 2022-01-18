# :zap: Bolt - Opinionated React Templates

Bolt is a set of opinionated react bootstrap templates that make it easy to start any new project.
Stop spending hours configuring the same old libraries, and get started sooner.

All features are optional, so chop and change whatever library you like.

**React** <br/>
**React-Router** - 🌴 For fast reactive routing. <br/>
**Typescript** - 🦾 For strong typing support. <br/>
**ParcelJS** - ✨ Fast bundling, dev server, PostCSS support + more. <br/>
**Recoil** - 🪐 For fast, dynamic state management. <br/>
**Hoofd** - 🤯 For simple, hook-based head management. <br/>
**React Final Form** - 🥊 Super fast form management. <br/>
Presets for Prettier, ESLint, PostCSS. <br/>

Plus support for Firebase or GraphQL via the flavours below.

## Pre-Built Features

1.  Simple file structure - based on hooks, pages, atoms, components & logic.
2.  Object-Based Routing - Routes based on objects, instead of components with Suspense & Error Boundary.
3.  Preload Link Component - A component to dynamically load new components on hover, using React.lazy.
4.  App Update Notice - Alert users that the app needs an update without reinventing the wheel.
5.  Example Login Page - Ready to go.

## Flavours

There are currently two supported flavours of bolt.

|          | Description                         | Branch                        |
| -------- | ----------------------------------- | ----------------------------- |
| Basic    | Basic supported features.           | main                          |
| Relay    | Support for GraphQL via React-Relay | with-relay                    |
| Firebase | Using Firebase for auth/data.       | with-firebase _(coming soon)_ |

## Getting Started

Get started however you want, clone the zip folder, copy parts of the source code!

To stay up to date with the latest commits, it's recommend to clone this repo and create your own dev branch.

    git clone https://github.com/mjth/bolt.git

**Or** a specific branch to get one of the flavours:

    git clone --branch with-relay https://github.com/mjth/bolt.git

Now change to your own development branch

    git checkout -b master

All done! If you ever need to pull new updates from bolt, simply change back to the base branch and pull... e.g.

    git checkout with-relay
    git pull
