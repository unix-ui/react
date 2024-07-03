import { useState } from "react";
import { Checkbox } from "./@ui-kit/components/Checkbox/Checkbox";
import { UnixThemeProvider } from "./@ui-kit";
import { Transition } from "./@ui-kit/components/Transition/Transition";
import { Select } from "./@ui-kit/components/Select/Select";
import { Button } from "./@ui-kit/components/Button";
import { Modal } from "./@ui-kit/components/Modal";
import { Tabs } from "./@ui-kit/components/Tabs/Tabs";
import { unit } from "./@ui-kit/utils";
import { Drawer } from "./@ui-kit/components/Drawer/Drawer";
import clsx from "clsx";
import RippleBase from "./@ui-kit/components/RippleBase/RippleBase";
import { Datepicker } from "./@ui-kit/components/Datepickers";
import { AccordionItem } from "./@ui-kit/components/AccordionItem/AccordionItem";
import { AccordionButton } from "./@ui-kit/components/AccordionButton/AccordionButton";
import { AccordionContent } from "./@ui-kit/components/AccordionContent/AccordionContent";
import { Accordion } from "./@ui-kit/components/Accordion/Accordion";
import { AvatarGroup } from "./@ui-kit/components/AvatarGroup/AvatarGroup";
import { Avatar } from "./@ui-kit/components/Avatar/Avatar";

function App() {
  const [checked, setChecked] = useState(false);
  const [tabs, setTabs] = useState(2);
  const [trans, setTrans] = useState(false);
  const [select, setSelect] = useState("Option 1");
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState("right");
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <UnixThemeProvider
      theme={{
        currentTheme: "light",
        theme: {
          light: {
            Button: {
              overrideStyles: {
                new_variant: {
                  button: {
                    styles: {
                      backgroundColor: "#f23",
                      borderRadius: "999px",
                    },
                  },
                },
              },
              sizes: {
                xxl: {
                  styles: { padding: unit.spacing(3, 4) },
                },
              },
            },
          },
        },
      }}
    >
      {/* <div className="p-5 flex items-center justify-center flex-col">
        <h1 className="mb-4 font-semibold text-[30px]">
          This is my lazy a*s showcase here
        </h1>
        <p className="mb-2">Checkbox</p>
        <div className="flex items-center justify-center mb-4 gap-4">
          <div className="flex items-center justify-center gap-2 flex-col">
            <Checkbox
              checked={checked}
              onChange={() => setChecked((p) => !p)}
              label="Checkbox"
            />
            <p>default</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Checkbox
              colorScheme="green"
              checked={checked}
              onChange={() => setChecked((p) => !p)}
              label="Checkbox"
            />
            <p>color scheme green</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Checkbox
              checked={checked}
              onChange={() => setChecked((p) => !p)}
              label="Checkbox"
              disabled
            />
            <p>disabled</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Checkbox
              checked={checked}
              onChange={() => setChecked((p) => !p)}
              label="Checkbox"
              size={30}
              labelProps={{ sx: { fontSize: 20 } }}
            />
            <p>custom checkbox size</p>
          </div>
        </div>

        <p className="mb-2">Buttons</p>
        <div className="flex items-center justify-center mb-4 gap-4 flex-wrap">
          <div className="flex items-center justify-center gap-2 flex-col">
            <Button>Button</Button>
            <p>default</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Button ripple>Button</Button>
            <p>ripple</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Button ripple rippleColor="#f23">
              Button
            </Button>
            <p>ripple with custom color</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Button isLoading ripple rippleColor="#f23">
              Button
            </Button>
            <p>loading</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Button disabled ripple rippleColor="#f23">
              Button
            </Button>
            <p>disabled</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Button ripple variant="outlined">
              Button
            </Button>
            <p>variant outlined</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Button ripple variant="outlined" isLoading>
              Button
            </Button>
            <p>variant outlined loading</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Button ripple variant="ghost">
              Button
            </Button>
            <p>variant ghost</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Button ripple size="xs">
              Button
            </Button>
            <p>size: xs</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Button ripple size="sm">
              Button
            </Button>
            <p>size: sm</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Button ripple size="md">
              Button
            </Button>
            <p>size: md(default)</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Button ripple size="lg">
              Button
            </Button>
            <p>size: lg</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Button colorScheme="orange" ripple size="lg">
              Button
            </Button>
            <p>color scheme orange</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Button variant="new_variant" ripple size="sm">
              Button
            </Button>
            <p>Custom variant</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-col">
            <Button variant="new_variant" ripple size="xxl">
              Button
            </Button>
            <p>Custom size</p>
          </div>
        </div>
        <p className="mb-2">Ripple Base</p>
        <RippleBase rippleColor="#f23">Hello world</RippleBase>
        <p className="mt-5">Tabs</p>
        <Tabs
          value={tabs}
          onChange={(e) => {
            setTabs(e);
          }}
          tabs={["1", "2", "3", "s"]}
        >
          <button className="px-3 py-2">Tab 1</button>
          <button className="px-3 py-2">Tab 2</button>
          <button className="px-3 py-2">Tab 3</button>
        </Tabs>
        <p className="mt-5">Tabs with custom indicator</p>
        <Tabs
          value={tabs}
          onChange={(e) => {
            setTabs(e);
          }}
          tabs={["1", "2", "3", "s"]}
          sx={{ overflow: "visible" }}
          indicatorRenderer={() => (
            <span className="inline-block h-2 rounded-sm bg-red-500 absolute -bottom-1 transition-all"></span>
          )}
        >
          <button className="px-3 py-2">Tab 1</button>
          <button className="px-3 py-2">Tab 2</button>
          <button className="px-3 py-2">Tab 3</button>
        </Tabs>
        <p className="mt-4">Transition</p>
        <Button onClick={() => setTrans((p) => !p)}>Show</Button>
        <Transition
          show={trans}
          enteringStyle={{ opacity: 0, duration: 500 }}
          exitingStyle={{ opacity: 0, duration: 400 }}
          activeStyle={{ opacity: 1 }}
        >
          <p className="py-4">Hello world</p>
        </Transition>
        <p className="mt-4">Select</p>
        <Select
          value={select}
          options={["Option 1", "Option 2", "Option 3"]}
          onChange={(e) => setSelect(e)}
          inputRenderer={<input value={select} className="bg-red-200" />}
        />

        <p className="mt-4">Select with blue color scheme</p>
        <Select
          value={select}
          colorScheme="blue"
          options={["Option 1", "Option 2", "Option 3"]}
          onChange={(e) => setSelect(e)}
          inputRenderer={<input value={select} className="bg-red-200" />}
        />
        <p className="mt-4">Select with custom item render</p>
        <Select
          value={select}
          colorScheme="blue"
          options={["Option 1", "Option 2", "Option 3"]}
          onChange={(e) => setSelect(e)}
          inputRenderer={<input value={select} className="bg-red-200" />}
          itemRenderer={(e) => <p className="hover:bg-red-200">{e}</p>}
        />
        <p>
          (you may already notice the the bug with select it's for the popover
          component which is still under development)
        </p>

        <p className="mt-4">Modal</p>
        <Button size="sm" onClick={() => setModal(true)} variant="default">
          Open Modal
        </Button>
        <Modal onClose={() => setModal(false)} sx={{}} show={modal}>
          <div className="bg-white rounded flex justify-center items-center px-4 py-6">
            Hello world
          </div>
        </Modal>
        <p className="mt-4">Drawers</p>
        <div className="flex items-center justify-center gap-4 mt-5">
          <Button
            size="sm"
            onClick={() => {
              setDrawer("left");
              setDrawerOpen(true);
            }}
            variant="default"
          >
            Drawer left
          </Button>
          <Button
            size="sm"
            onClick={() => {
              setDrawer("right");
              setDrawerOpen(true);
            }}
            variant="default"
          >
            Drawer right
          </Button>
          <Button
            size="sm"
            onClick={() => {
              setDrawer("top");
              setDrawerOpen(true);
            }}
            variant="default"
          >
            Drawer top
          </Button>
          <Button
            size="sm"
            onClick={() => {
              setDrawer("bottom");
              setDrawerOpen(true);
            }}
            variant="default"
          >
            Drawer bottom
          </Button>
        </div>
        <Drawer
          position={drawer as any}
          onClose={() => setDrawerOpen(false)}
          show={!!drawerOpen}
        >
          <div
            className={clsx(
              "bg-white rounded flex justify-center items-center px-4 py-6",
              drawer === "left" || drawer === "right"
                ? "h-screen"
                : "w-screen h-[100px]"
            )}
          >
            Hello world
          </div>
        </Drawer>
        <p className="mt-4">Date picker</p>
        <Datepicker />
        <p className="mt-4">Date picker with custom calender</p>
        <Datepicker
          calenderRenderer={({
            currentMonthDates,
            prevMonthDates,
            nextMonthDates,
          }) => {
            return (
              <div className="grid grid-cols-7 gap-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((value, i) => {
                  return <p key={"a" + i}>{value}</p>;
                })}
                {prevMonthDates.map((value, i) => {
                  return <p key={"a" + i}>{value}</p>;
                })}
                {currentMonthDates.map((value, i) => {
                  return <p key={"a" + i}>{value}</p>;
                })}
                {nextMonthDates.map((value, i) => {
                  return <p key={"a" + i}>{value}</p>;
                })}
              </div>
            );
          }}
        />
      </div> */}
      {/* <Button as= ></Button> */}
      <Accordion>
        <AccordionItem>
          <AccordionButton as={Button}>
            {({ open }) => `${open}`}
          </AccordionButton>
          <AccordionContent>
            <div>1</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton as={Button}>Hello</AccordionButton>
          <AccordionContent>
            <div>2</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Datepicker></Datepicker>
      <AvatarGroup>
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>
    </UnixThemeProvider>
  );
}

export default App;
