import { PhoneNumberUtil } from 'google-libphonenumber';
import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    console.log(error)
    return false;
  }
};

const App = () => {
  const [phone, setPhone] = useState('');
  const isValid = isPhoneValid(phone);

  return (
    <form
      onSubmit={(e) => {
        // some submit logic
        e.preventDefault();
        alert(`Submitted phone: ${phone}`);
      }}
    >
      <PhoneInput
        defaultCountry="ua"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />

      {!isValid && <div style={{ color: 'red' }}>Phone is not valid</div>}

      <button
        disabled={!isValid}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
export default App