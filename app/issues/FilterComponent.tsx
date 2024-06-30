'use client';

import { useState } from 'react';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';

const people = [
  { id: 1, status: 'ALL' },
  { id: 2, status: 'OPEN' },
  { id: 3, status: 'CLOSED' },
  { id: 4, status: 'IN_PROGRESS' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function FilterComponent() {
  const [selected, setSelected] = useState(people[0]);
  const router = useRouter();

  const handleChange = (person: { id: number, status: string }) => {
    setSelected(person);
    // console.log(person.status);
    
    if(person.status==='OPEN' || person.status==='CLOSED' || person.status==='IN_PROGRESS'){ 
      const query=person.status ? `/issues?filterBy=${encodeURIComponent(person.status.trim())}` :''
      router.push(query);      
    }else{
      router.push('/issues');
    }
  };

  return (
    <Listbox value={selected} onChange={handleChange} >
      {({ open }) => (
        <>
          <div className="relative mt-2 ml-4 mb-2 w-[10rem] lg:w-[10rem] sm:[6rem]">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="block truncate">{selected.status}</span>
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
                  className={({ active }) =>
                    classNames(
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9'
                    )
                  }
                  value={person}
                >
                  <span className="block truncate">{person.status}</span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </>
      )}
    </Listbox>
  );
}
