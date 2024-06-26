'use client'
import { useState } from 'react';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },

];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function FilterComponent() {
  const [selected, setSelected] = useState(people[3]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-2 ml-4">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {people.map((person) => (
                <ListboxOption
                  key={person.id}
                  className={({ focus }) =>
                    classNames(
                      focus ? 'bg-indigo-600 text-white' : '',
                      !focus ? 'text-gray-900' : '',
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                    )
                  }
                  value={person}
                >
                  <span className="block truncate">{person.name}</span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </>
      )}
    </Listbox>
  );
}
