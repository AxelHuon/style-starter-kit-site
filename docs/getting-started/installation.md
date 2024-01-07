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

Initiating the `style-starter-kit init` command triggers a setup process where you answer questions to customize the library. Your responses tailor the library's configuration. After completing this setup, a `style-starter-kit.config.json` file is generated at your project's root. This file holds all your specified settings, ensuring the Style Starter Kit aligns with your project's needs.

#### Command :

```bash
style-starter-kit init
```

## Configuration File Example

```json
{
  "framework": "React",
  "language": "TypeScript",
  "styleLib": "css-modules"
}
```
## Configuration Parameters

- **Framework**: Automatically detected based on your current project. The Style Starter Kit identifies whether your project is built with React or Next.js This ensures the library integrates seamlessly with your project's framework.

- **Language**: Indicates the programming language used for generating files within the library. Options include JavaScript or TypeScript, providing flexibility in alignment with your project's coding standards.

- **StyleLib**: Defines the method for generating styles. The choices are css-modules or styled-components, allowing you to select a styling approach that matches your project's design philosophy.

:::tip
You can manually modify the `style-starter-kit.config.json` file to further customize the configuration to your specific requirements.
:::


The `style-starter-kit.config.json` file at the root of your project ensures that the Style Starter Kit is configured precisely to fit your project's technical framework, language preference, and styling methodology.
