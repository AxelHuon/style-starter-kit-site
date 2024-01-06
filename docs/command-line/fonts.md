# Style Starter Kit: Fonts


This command is a powerful tool for generating a cohesive fonts scheme. Here's a detailed breakdown of its functionality:

```bash
style-starter-kit fonts
```

## Interactive Prompt for Font Selection
When executed, the command initiates an interactive prompt sequence.

### Font Family Selection : 
Choose a font family for your theme. 
This will download the entire font family from Google Fonts and organize it into a dedicated folder: `./public/fonts/name_of_family_font/`

- Roboto
- Open Sans
- Lato
- ...

Afterward, the command will enable you to generate and pre-install your fonts automatically. You are now prepared to employ them in your project!

## CSS File Set-up
When you choose a family, the selected font family is set-up into a CSS file, which is named `fonts.css`. This file can be placed in one of the following directories:

- Root directory: `./style/fonts.css`
- Inside `src/style`: `src/style/fonts.css`

:::warning
The directory choice depends on the front-end framework being used.
:::

## Output Formats

The generated files will have the following structure:
    
#### Exemple fonts.css : 

```css
    @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 100;
        font-display: swap;
        src: url('../../public/fonts/Roboto/Roboto_italic_100.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url('../../public/fonts/Roboto/Roboto_italic_300.ttf') format('truetype');
    }
    /* Additional fonts variables */
```


