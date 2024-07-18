# Contributing

## Bug fixes

Issues can be found on our [GitHub issues](https://github.com/yummygum/react-flagpack/issues) page. Found a bug? Let us know! Report the bug by [creating a new issue](https://github.com/Yummygum/react-flagpack/issues/new/choose). Make sure to check the issues page before creating a new bug issue to prevent duplicate issues. Once you start fixing a bug, post your intent on the issue to prevent others diving in at the same time.

## New features

Upcoming new features can be found on our [GitHub issues](https://github.com/yummygum/react-flagpack/issues) page. Do you want to contribute by adding new features, open a [Feature Request](https://github.com/Yummygum/react-flagpack/issues/new/choose).

## Documentation

If a PR introduces or changes API, mention one of the Yummygum team members to make sure it'll be processed into the [website docs](https://flagpack.xyz/docs/).


# Development
If you wish to run the package locally, go through the following steps:

1. Fork the `react-flagpack` repo and clone your fork to your system:
```bash
$: git clone https://github.com/{your-username}/react-flagpack.git
```
2. Install the package

```bash
$: npm install
```

Make the changes you are trying to make, then do the following:

3. Create a build
```bash
$: npm run build
```

4. Install the dependencies of the test-applications
```bash
$: npm run dev:install
```

5. Start the test applications
```bash
$: npm run dev:test
```

This will open a test application showing all flags in different frameworks:
- [create-react-app](http://localhost:3000)
- [Gatsby](http://localhost:3001)
- [NextJS App Router](http://localhost:3002)
- [NextJS Pages Router](http://localhost:3003)
- [Remix](http://localhost:3004)

1. You're now ready to go to develop on the `react-flagpack` package!
## Building the package
Building the package should only ever be needed if there are changes from the `flagpack-core` devDependency. `react-flagpack`
 will be built based on the `CountryCodeList.json` in `flagpack-core`.

To build `react-flagpack` go through the following steps:

1. Update `flagpack-core` to the latest version
2. Run the `build` script in `react-flagpack`
```bash
$: npm run build
```


## Releasing
If you have proper credentials, like a @yummygum team member, you can release a new version of `react-flagpack`.

To release a new version you'll need to make sure all changes commits are done and pushed within the desired version branch. Please follow the [semver](https://semver.org/) guidelines to decide what kind of release type your changes would translate to.

```
$: npm version <release_type>
```
This will update the version number in the `package.json`, and will add a git tag automatically. Next you'll need to push the git tag to the remote.
```
$: git push --tags origin main
```
After that you'll need to publish to npm.
```
$: npm publish
```

When you're confident with the release, make sure the version tag is also released at GitHub.

Follow these steps to get your code PR-ready:

- Make sure your code is linted and formatted nicely according to the style guide
- Create a PR and mention what changes you made
