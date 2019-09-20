# WebDevStudios JavaScript Coding Standards

<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

## Leadership

- [Aubrey Portwood](https://github.com/aubreypwd) - Project Lead
- [Greg Rickaby](https://github.com/gregrickaby) - Director of Engineering

## Installation

Install via `npm`:

`npm install git://git@github.com:WebDevStudios/js-coding-standards.git#1.0.0-beta1 --save-dev`

In your `package.json`, use:

```js
"eslintConfig": {
    "extends": "@webdevstudios/js-coding-standards"
}
```

## Understanding Dependency Hierarchy

- `@webdevstudios/js-coding-standards` requires:
    + `@webdevstudios/eslint-config-js-coding-standards` requires:
        * `@webdevstudios/eslint-plugin-js-coding-standards`

By installing `js-coding-standards` you install `@webdevstudios/eslint-config-js-coding-standards` for a selection of rules which utilizes a custom ESLint plugin `@webdevstudios/eslint-plugin-js-coding-standards` for some custom rules.

__________

# Changelog

## 1.0.0-beta1

- Installed `eslint@6` here in hopes that it will install the right version in `@webdevstudios/eslint-config-js-coding-standards` isn't being respected
- Made into an eslint-config-agnostic repo that just requires `@webdevstudios/eslint-config-js-coding-standards` and `master` will be trusted as latest
