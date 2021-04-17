<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

# WebDevStudios JavaScript Coding Standards

-------

This package is DEPRECATED and no longer in use at WebDevStudios and will no longer be maintained.

-------

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
echo $( npx jq '.eslintConfig = {"extends": "@webdevstudios/js-coding-standards"}' package.json ) | npx jq . > package-tmp.json && mv package-tmp.json package.json 

```

__________

# Changelog

- [See Releases...](https://github.com/WebDevStudios/js-coding-standards/releases)
