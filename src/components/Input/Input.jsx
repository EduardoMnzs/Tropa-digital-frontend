import React, { useState } from 'react';
import { InputWrapper, Label, StyledInput, PasswordInputContainer, TogglePasswordButton } from './Input.styles';
import { Eye, EyeOff } from 'lucide-react';

const Input = ({ label, type, id, placeholder, value, onChange, ...rest }) => {
    const [showPassword, setShowPassword] = useState(false);

    const renderInput = () => {
        if (type === 'password') {
            return (
                <PasswordInputContainer>
                    <StyledInput
                        id={id}
                        type={showPassword ? 'text' : 'password'}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        {...rest}
                    />
                    <TogglePasswordButton type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                            <EyeOff />
                        ) : (
                            <Eye />
                        )}
                    </TogglePasswordButton>
                </PasswordInputContainer>
            );
        }
        return (
            <StyledInput
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...rest}
            />
        );
    };

    return (
        <InputWrapper>
            {label && <Label htmlFor={id}>{label}</Label>}
            {renderInput()}
        </InputWrapper>
    );
};

export default Input;