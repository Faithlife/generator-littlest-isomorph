# Littlest Generator

A [Yeoman][yeoman] generator for common [Littlest][littlest] scaffolding.

## Getting Started

1. Ensure you have [Yeoman][yeoman] installed: `which yo`
  - If not, it can be installed with: `npm install -g yo`
1. Install the Littlest generator: `npm install -g generator-littlest`
1. To create a new project, run `yo littlest` in an empty directory.

## What are all these Opinions doing here?

To give a better indication of how its original authors are using
Littlest, some of their common practices are built into this generator:

- BEM
- Express
- LESS
- Normalize.css

That said, they're all added at _this_ level of abstraction, and _none of them
are required to use Littlest._ Even the directory layout is completely
subjective, as everything involved is _just_ a Node module. Delete at will, and
replace with your own preferences. We sincerely hope there's not so much of that
code to make deleting it more painful than the _documentation_ they provide by
existing in the first place.

[yeoman]: http://yeoman.io
[littlest]: https://github.com/Littlest
