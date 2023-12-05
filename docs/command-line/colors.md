# Style Starter Kit: Colors


This command is a powerful tool for generating a cohesive color scheme. Here's a detailed breakdown of its functionality:

```bash
style-starter-kit colors
```

## Interactive Prompt for Color Selection
When executed, the command initiates an interactive prompt sequence.

### All steps : 

- **Primary Color Value***: Choose a primary color for your theme.
- **Secondary Color Ask***: Decide if you need a secondary color.
- **Secondary Color Value**: Choose a primary color for your theme.
- **Black and White***: Include black and white in your palette.
- **Color Variance***: Generate lighter and darker shades of the chosen colors.

## CSS File Export Option
You can opt to export these colors into a CSS file, which is named `color.css`. This file can be placed in one of the following directories:
- Root directory: `./style/color.css`
- Inside `src/style`: `src/style/color.css`

## JavaScript/TypeScript File Export
Depending on the project setup, users can also generate a JavaScript or TypeScript file that includes color definitions. This file is named either `Color.ts` or `Color.js` and is located in:
- Root directory: `./theme`
- Inside `src/theme`: `./src/theme`

:::warning
The directory choice depends on the front-end framework being used.
:::

## Output Formats
The generated files will have the following structure:

### CSS (color.css)
```css
:root {
  --primary-color: #324343;
  --secondary-color: #324434;
  /* Additional color variables */
}
```

### JavaScript/TypeScript (Color.ts/js)
```js
export const Colors = {
    PRIMARY: "#324343",
    SECONDARY: "#324434",
    /* Additional color constants */
};
```

## Color Variance Generation

The `style-starter-kit colors` command includes an advanced feature for generating color variances. This feature is particularly useful for creating a comprehensive and versatile color palette for your web project.

### How It Works
When you opt to generate color variances, the tool systematically creates a range of shades for each selected color (primary and secondary). These variances are labeled from `900` to `100`, where:

- `900` represents a shade that is slightly darker than the base color.
- Each subsequent number (800, 700, ..., 200, 100) represents a progressively lighter shade of the base color.
- `100` is the lightest possible shade of the base color.

### Example
If your primary color is `#324343`, the tool will generate the following shades:

- `--primary-900`: A shade slightly darker than `#324343`.
- `--primary-800`: A lighter shade than `--primary-900`.
- ...
- `--primary-100`: The lightest shade of `#324343`.

Similarly, if a secondary color is chosen, the same range of shades will be created for that color.

### Purpose
This feature allows for greater flexibility and creativity in web design. Having a range of shades from the same color family enables designers to maintain consistency while having the freedom to highlight different elements and sections of a website effectively.

### Output in Files
    
#### Exemple CSS : 

```css
:root {
    --primary-100: #475656;
    --primary-200: #5b6969;
    --primary-300: #707b7b;
    --primary-400: #848e8e;
    --primary-500: #99a1a1;
    /*Others style...*/
}
```

#### Exemple JS/TS :

```js
export const Colors =  {
    PRIMARY_900: "#475656",
    PRIMARY_800: "#5b6969",
    PRIMARY_700: "#707b7b",
    PRIMARY_600: "#848e8e",
    PRIMARY_500: "#99a1a1",
    /*Others style...*/
}
```


