## BETA DOCUMENTS

(Will be replace with the website documentation)
unix-ui focuses solely on theming, providing developers with complete customization freedom for components while maintaining core functionality.

#### Installation

```javascript
npm i @unix-ui/react @emotion/react @emotion/styled moment
```

#### How to start

First import `UnixThemeProvider` from `@unix-ui/react`

```javascript
import { UnixThemeProvider } from "@unix-ui/react";

// pass theme in provider
<UnixThemeProvider
  theme={{
    // don't forget to pass a default theme
    currentTheme: "light",
  }}
>
  <App />
</UnixThemeProvider>;
```

#### Available Components:

`<Button />`
`<Checkbox />`
`<Datepickers />`
`<Drawer />`
`<Layouts />`
`<LoadingIcon />`
`<Popover />`
`<RippleBase />`
`<Transition />`
`<Select />`

#### Theming

```javascript
<UnixThemeProvider
  theme={{
    currentTheme: "light",
    theme: {
      // styles will be applied based on the theme
      light: {
        Button: {
          // override default styles
          overrideStyles: {
            // override style of a variant
            default: {
              button: {
                // decide weather to remove all the default styles from
                removeDefaultStyling: true,
                // pass the styles to override
                styles: { background: "red" },
              },
            },
          },
        },
      },
    },
  }}
>
  <App />
</UnixThemeProvider>
```
