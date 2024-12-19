import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useFormContext, Controller } from 'react-hook-form';

const PhoneNumber = () => {
  const { control } = useFormContext();

  return (
    <div style={{ zIndex: 100 }}>
      <Controller
        name="phoneNumber"
        control={control}
        defaultValue=""
        render={({ field: { onChange, onBlur: handleChange, value } }) => (
          <PhoneInput
            value={value}
            placeholder="Ingresa el número de telefono"
            onChange={onChange}
            containerStyle={{
              width: '100%',
              marginBottom: '20px',
            }}
            inputStyle={{
              width: '100%',
              height: '48px',
              fontSize: '14px',
              backgroundColor: '#F6F9FC',
              border: '1px solid #ccc',
              borderRadius: '12px',
              paddingLeft: '48px',
            }}
            onBlur={() => {
              handleChange();
            }}
            country="mx"
            dropdownStyle={{
              borderRadius: '5px',
              fontSize: '14px',
              position: 'absolute',
              border: '1px solid #ccc',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          />
        )}
      />
    </div>
  );
};

export default PhoneNumber;
