import { useState } from "react";
import Checkbox from "./@ui-kit/components/Checkbox/Checkbox";
import { VenuxThemeProvider } from "./@ui-kit/provider";
import { Button } from "./@ui-kit/components";
import { Transition } from "./@ui-kit/components/Transition/Transition";
import { Select } from "./@ui-kit/components/Select/Select";
import Datepicker from "./@ui-kit/components/Datepickers/Datepicker";
import Popover from "./@ui-kit/components/Popover/Popover";
import { Center } from "./@ui-kit/components/Layouts/Flexbox";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <VenuxThemeProvider
      theme={{
        currentTheme: "light",
        theme: {
          light: {
            Button: {
              defaultProps: { all: { ripple: true } },
              overrideStyles: {
                outlined: {},
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
            Checkbox: {},
          },
        },
      }}
    >
      <Checkbox
        colorScheme="red"
        checked={checked}
        onChange={() => setChecked((p) => !p)}
        label="Checkbox"
        size={40}
        iconSize={40}
      />
      <Transition
        show={checked}
        enteringStyle={{ opacity: 0, duration: 150 }}
        exitingStyle={{ opacity: 0, duration: 400 }}
        activeStyle={{ opacity: 1 }}
      >
        asdasdas
      </Transition>

      <Select
        value={1}
        colorScheme="red"
        options={[1, 2, 3]}
        inputRenderer={<input />}
      />
      <Datepicker />
      <Button>asds</Button>

      <Center sx={{ justifyContent: "center" }}>
        <Popover>
          <div style={{ background: "red", width: 300 }}>asdsa</div>
        </Popover>
      </Center>
    </VenuxThemeProvider>
  );
}

export default App;
