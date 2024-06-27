## BETA DOCUMENTS

#### Installation

```javascript
npm i @unix-ui/react @emotion/react @emotion/styled moment
```

#### How to start

First import `UnixThemeProvider`

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
