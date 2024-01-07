# Style Starter Kit: Fonts

The `style-starter-kit fonts` command is a novel addition to the Style Starter Kit, streamlining the process of incorporating custom fonts into your web projects. This command automates the download and integration of font files into your project, along with generating the necessary CSS for font-face declarations.

## Command Usage

To use this feature, simply run the following command:

```bash
style-starter-kit fonts
```

## Interactive Font Selection Prompt

Upon execution, the command presents an interactive prompt where you can select the desired font. A variety of popular fonts like Roboto, Lato, and others are available for selection.

### Steps:

- **Font Selection**: Choose from a list of available fonts (e.g., Roboto, Lato, etc.).

## Automated Font Download and CSS Generation

After selecting the font, the tool performs the following actions:

1. **Font Files Download**: Automatically downloads the font files and places them in the `./public/fonts/` directory.

2. **CSS File Creation**: Generates a `fonts.css` file containing all the necessary font-face declarations.

3. **CSS File Placement**:
    - For React, Vue, or Unknown project types, the `fonts.css` file is placed in `./src/styles/fonts.css`.
    - For Next.js or Nuxt projects, the file is placed in `./styles/fonts.css`.

CSS file : 

```css
@font-face {
 font-family: 'Montserrat';
 font-style: italic;
 font-weight: 100;
 src: url('../public/fonts/Montserrat_italic_100.ttf') format('ttf');
}
@font-face {
 font-family: 'Montserrat';
 font-style: italic;
 font-weight: 300;
 src: url('../public/fonts/Montserrat_italic_300.ttf') format('ttf');
}
@font-face {
 font-family: 'Montserrat';
 font-style: italic;
 font-weight: 400;
 src: url('../public/fonts/Montserrat_italic_400.ttf') format('ttf');
}
/*...*/
```

## Integration with Project Configuration

Once the CSS file is created, the tool updates the `style-starter-kit.config.json` file by adding the available fonts under the `fonts` key as shown below:

```json
{
  "framework": "nextjs",
  "language": "TypeScript",
  "styleLib": "css-modules",
  "fonts": [
    "Montserrat_italic_100",
    "Montserrat_italic_300",
    "Montserrat_italic_400",
    "Montserrat_italic_500",
    "Montserrat_italic_700",
    "Montserrat_italic_900",
    "Montserrat_normal_100",
    "Montserrat_normal_300",
    "Montserrat_normal_400",
    "Montserrat_normal_500",
    "Montserrat_normal_700",
    "Montserrat_normal_900"
  ]
}
```

## Adding Additional Fonts and Reinstalling Missing Ones

The `style-starter-kit fonts` command is not only for initial setup but can also be used to add new fonts to your project at any time. To do this, simply execute the command again and select the desired fonts from the interactive prompt. The tool will seamlessly handle the download and integration of these new fonts into your existing setup, updating both the `fonts.css file and the `style-starter-kit.config.json`.

Additionally, if you previously installed a font but accidentally deleted some of its files, you can easily reinstall it. First, remove the entries for the deleted font from the `style-starter-kit.config.json under the `fonts key. Then, rerun the `style-starter-kit fonts` command and select the font you wish to reinstall. The command will redownload the necessary files and update your configuration accordingly.

This feature ensures that your project’s typography remains flexible, allowing it to evolve and adapt over time while also providing a straightforward solution for any accidental deletions or changes in your font files.


## Purpose and Benefits

This feature enhances the ease of incorporating and managing custom fonts in web projects. It saves time and reduces the complexity involved in manually downloading and integrating font files and CSS.

### Key Advantages:

- Simplifies the process of adding custom fonts to a project.
- Ensures consistency in font usage across different project types.
- Automates the tedious task of setting up font-face declarations in CSS.

In conclusion, the `style-starter-kit fonts` command is an essential tool for web developers looking to efficiently integrate custom fonts into their projects, ensuring both consistency and quality in typography.
