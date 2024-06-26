import { useState } from "react";
import Checkbox from "./@ui-kit/components/Checkbox/Checkbox";
import { UnixThemeProvider } from "./@ui-kit/provider";
import { Button } from "./@ui-kit/components";
import { Transition } from "./@ui-kit/components/Transition/Transition";
import { Select } from "./@ui-kit/components/Select/Select";
import { Datepicker } from "./@ui-kit/components/Datepickers/Datepicker";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <UnixThemeProvider
      theme={{
        currentTheme: "light",
        theme: {
          light: {},
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
      <Datepicker
        onChange={(e) => {
          console.log(e.format("YYYY-MM-DD"));
        }}
        colorScheme="red"
      />
      <Button>asds</Button>
    </UnixThemeProvider>
  );
}

export default App;
