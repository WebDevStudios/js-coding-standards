<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

# WebDevStudios JavaScript Coding Standards

## How to Install

Install via `npm`:

`npm install git://git@github.com:WebDevStudios/js-coding-standards.git --save-dev`

In your `package.json`, use:

```js
"eslintConfig": {
    "extends": "@webdevstudios/js-coding-standards"
}
```

__________

# Changelog

## 1.0.0-beta1

- Installed `eslint@6` here in hopes that it will install the right version in `@webdevstudios/eslint-config-js-coding-standards` isn't being respected
- Made into an eslint-config-agnostic repo that just requires `@webdevstudios/eslint-config-js-coding-standards` and `master` will be trusted as latest
