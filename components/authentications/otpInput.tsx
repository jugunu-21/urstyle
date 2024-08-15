import React from 'react';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
  
interface ChildComponentProps {
    otp: string;
    setOtp: React.Dispatch<React.SetStateAction<string>>;
  }
export default function OtpInput({ otp, setOtp }: ChildComponentProps) {
  return (
    <InputOTP
                 
                    maxLength={6}
                    value={otp}
                    onChange={(newotp) => setOtp(newotp)}
                   >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
  );
}
