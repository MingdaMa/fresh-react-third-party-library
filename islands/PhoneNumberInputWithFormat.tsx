import type { Signal } from "@preact/signals";
import PhoneNumber from 'react-phone-number-input';

interface PhoneNumberInputWithFormatProps {
  value: Signal<string>;
}

export default function PhoneNumberInputWithFormat(props: PhoneNumberInputWithFormatProps) {
  return (
    <div class="flex gap-8 py-6">
      <PhoneNumber 
        placeholder="Enter phone number"
        defaultCountry="US"
        onChange={console.log}
        value={props.value}
      />
    </div>
  );
}
