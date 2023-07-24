'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { cabin_sketch } from "../layout";
import { z } from "zod";

export function Registration() {

  const registerUserSchema = z
    .object({
      email: z.string().min(1, { message: "Please enter your email"}),
      password: z 
        .string()
        .min(1, { message: "Please enter a password"})
        .min(8, { message: "Password must be at least 8 characters"}),
      confirmPassword: z.string().min(1, { message: "Please confirm your password"}),
    })
    .refine((data) => data.password === data.confirm, {
      message: "Please make sure your passwords match",
      path: ["confirm"], // path of error
    });

  const { 
      register, 
      formState: {errors, isSubmitting}, 
      handleSubmit 
    } = useForm({
      resolver: zodResolver(registerUserSchema),
    });
  
    const onSubmit = (data) => {
      console.log(data);
    };
  
  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      name="userRegisteration" 
      action="/" 
      method="POST" 
      data-netlify="true"
      netlify-honeypot="bot-field" 
      className="flex flex-col z-10 outline-dashed outline-4 outline-red-500
      ">

      <input type="hidden" name="form-name" value="userRegistration" /> 

      <label className="hidden"></label>
      <input name="bot-field" className="hidden" />



      <h1 className={cabin_sketch.className}>Join Us For a Good Climb!</h1>

      <label htmlFor="email">Email</label> 
      <input type="email" name="email" id="email"  
        {...register("email")} 
      />
      {errors.email?.message && <p>{errors.email?.message}</p>}

      <label htmlFor="password">Password</label>
      <input type="text" name="password" id="password"
        {...register("password")}
      />
      {errors.password?.message && <p>{errors.password?.message}</p>}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="text" name="confirmPassword" id="confirmPassword" 
        {...register("confirmPassword")} 
      />
      {errors.confirmPassword?.message && <p>{errors.confirmPassword?.message}</p>}

      <button 
        type="submit"
        disabled={isSubmitting}
      >
        Join!</button>
    </form>
  )
}