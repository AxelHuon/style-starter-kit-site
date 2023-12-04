---
sidebar_position: 6
---

# Installation
Learn how to get Style Starter Kit up and running in your project.


## Install Style Starter Kit via npm

```bash
npm i style-starter-kit
```


## Create your configuration file

```bash
style-starter-kit init
```
This will create a minimal `style-starter-kit.config.js` file at the root of your project:


```ts
export default {
    framework: 'React',
    language: 'TypeScript',
    styleLib: 'css-modules',
};

```
