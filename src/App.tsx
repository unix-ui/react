import { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "./@ui-kit/components";
import { VenuxThemeProvider } from "./@ui-kit/provider";
import { Center } from "./@ui-kit/components/Layouts/Flexbox";
import { keyframes } from "@emotion/react";

const rippleKeyframes = keyframes({
  "0%": { scale: "0", opacity: "0.2" },
  "40%": { scale: "3", opacity: "0.2" },
  "100%": { scale: "3", opacity: "0" },
});

const RippleSpan_ = styled.span({
  display: "inline-block",
  position: "absolute",
  borderRadius: "9999px",
  pointerEvents: "none",
  animation: rippleKeyframes + " 0.8s 1 linear forwards",
  background: "red",
});
function App() {
  return (
    <VenuxThemeProvider
      theme={{
        currentTheme: "light",
        theme: {
          light: {
            Button: {
              defaultProps: {
                outlined: {},
              },
              overrideStyles: {
                default: {},
                var1: {
                  removeDefaultStyling: true,
                  button: {
                    styles: {
                      background: "red",
                    },
                  },
                },
              },
              sizes: {
                cs: { styles: { padding: "10px 20px" } },
              },
            },
          },
        },
      }}
    >
      <Button ripple size="xs">
        asd
      </Button>
      <Button ripple size="sm">
        asd
      </Button>
      <Button ripple size="md">
        asd
      </Button>
      <Center sx={{ height: 200 }} gap={20}>
        <Button ripple variant="ghost" size="md">
          Button
        </Button>
        <Button colorScheme="blue" variant="var1" size="sm">
          Button
        </Button>
        <Button ripple colorScheme="blue" variant="outlined">
          Button
        </Button>
      </Center>
    </VenuxThemeProvider>
  );
}

export default App;
