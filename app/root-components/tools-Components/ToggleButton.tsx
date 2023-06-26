"use client";
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

export default function ToggleButton(props) {
  const [enabled, setEnabled] = useState(props.switchedOn);

  function handleSwitch() {
    setEnabled(!enabled);
    props.handleToggleButton(!enabled);
  }

  useEffect(() => {
    setEnabled(props.switchedOn);
  }, [props.switchedOn]);

  return (
    <div>
      <Switch
        checked={enabled}
        onChange={() => handleSwitch()}
        className={`${enabled ? "bg-blue-500" : "bg-gray-400"}
          relative inline-flex h-[19px] w-[35px] shrink-0 cursor-pointer rounded-full border-2
          border-transparent transition-colors duration-200 ease-in-out
          focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full
            bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
