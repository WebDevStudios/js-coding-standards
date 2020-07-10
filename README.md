<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

# WebDevStudios JavaScript Coding Standards

## How to Install

```bash
npm install @webdevstudios/js-coding-standards --save-dev
```

In your `package.json`, you can add:

```js
"eslintConfig": {
    "extends": "@webdevstudios/js-coding-standards"
}
```

To modify `package.json` quickly using [`jq`](https://stedolan.github.io/jq/) use:

```bash
echo $( jq '.eslintConfig = {"extends": "@webdevstudios/js-coding-standards"}' package.json ) | jq . > package-tmp.json && mv package-tmp.json package.json
```

__________

# Changelog

## 1.1.0

- Update `eslint@7` and `@webdevstudios/eslint-config-js-coding-standards@1.0.2` and sub-sequently `@webdevstudios/eslint-plugin-js-coding-standards@1.0.1`

## 1.0.2

- Update `@webdevstudios/eslint-config-js-coding-standards` from `1.0.0` to `1.0.1` which introductes the exception for arrow functions

## 1.0.1

- Correction to readme fixing modifications using `jq`

## 1.0.0

- Stable release
- Require [`@webdevstudios/eslint-config-js-coding-standards@1.0.0`](https://github.com/WebDevStudios/eslint-config-js-coding-standards/tree/1.0.0)

## 1.0.0-beta1

- Installed public version of `@webdevstudios/eslint-config-js-coding-standards`
- Published to npmjs.org
- Installed `eslint@6` here in hopes that it will install the right version in `@webdevstudios/eslint-config-js-coding-standards` isn't being respected
- Made into an eslint-config-agnostic repo that just requires `@webdevstudios/eslint-config-js-coding-standards` and `master` will be trusted as latest
