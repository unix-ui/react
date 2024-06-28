import { useState } from "react";
import Checkbox from "./@ui-kit/components/Checkbox/Checkbox";
import { UnixThemeProvider } from "./@ui-kit";
import { Transition } from "./@ui-kit/components/Transition/Transition";
import { Select } from "./@ui-kit/components/Select/Select";
import { Datepicker } from "./@ui-kit/components/Datepickers/Datepicker";
import { Button } from "./@ui-kit/components/Button";
import Drawer from "./@ui-kit/components/Drawer/Drawer";
import { Modal } from "./@ui-kit/components/Modal";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <UnixThemeProvider
      theme={{
        currentTheme: "light",
        theme: {
          light: {
            Button: {
              defaultProps: { all: {} },
              overrideStyles: {
                default: {
                  button: {
                    styles: { backgroundColor: "red" },
                    removeDefaultStyling: true,
                  },
                },
                new_variant: {
                  button: {
                    styles: { backgroundColor: "red" },
                  },
                },
              },
            },
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

      <Button variant="default">asds</Button>
      <Modal onClose={() => setChecked(false)} sx={{}} show={checked}>
        <div style={{ width: 100, height: 100, background: "red" }}>asda</div>
      </Modal>
    </UnixThemeProvider>
  );
}

export default App;
