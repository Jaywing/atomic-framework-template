# Jaywing Front End Starter Kit

Atomic is the front end starter kit for Jaywing (Newbury).

Bringing together a growing a set of common re-usable components aimed at standardising our front end approach and speed
up development time.


## Installation - Site Template

Requires at least version 6 of Node. We reccomend using [nvm](https://github.com/creationix/nvm) to install and manage
your Node versions.

```bash
git clone https://github.com/Jaywing/atomic-framework-template.git AtomicFrameworkTemplate
cd AtomicFrameworkTemplate
yarn install
yarn start
```

## Commands

```bash
yarn start
```

This runs the development task, which starts compiling, watching, and live updating all our files as we change them.
Browsersync will start a server on port 3000, or do whatever you've configured it to do. You'll be able to see live
changes in all connected browsers.

```bash
yarn dist
```

This runs the production task, which compresses required files that aren't already.

---

View the [Atomic documentation](https://jaywing.github.io/atomic-framework-docs/).
