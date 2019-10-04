<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

# WebDevStudios JavaScript Coding Standards

## How to Install

```bash
npm install @webdevstudios/js-coding-standards@1.0.0-beta1 --save-dev
```

In your `package.json`, use:

```js
"eslintConfig": {
    "extends": "@webdevstudios/js-coding-standards"
}
```

__________

# Changelog

## 1.0.0-beta1

- Installed public version of `@webdevstudios/eslint-config-js-coding-standards`
- Published to npmjs.org
- Installed `eslint@6` here in hopes that it will install the right version in `@webdevstudios/eslint-config-js-coding-standards` isn't being respected
- Made into an eslint-config-agnostic repo that just requires `@webdevstudios/eslint-config-js-coding-standards` and `master` will be trusted as latest
