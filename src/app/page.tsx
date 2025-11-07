"use client";
import { toast } from "sonner";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {Button} from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import {Input} from "@/components/ui/input";



const Page = () => {
   const [value, setValue] = useState("");

   const trpc = useTRPC();
    const invoke = useMutation(trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("background job started");
import { useMutation } from "@tanstack/react-query";
import {Button} from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";


const Page = () => {
   const trpc = useTRPC();
    const invoke = useMutation(trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("bg started");
      }
    }));

  return (
    
    <div className="p-4 max-w-9xl mx-auto">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button disabled={invoke.isPending} onClick={() => invoke.mutate({value: value})}>
      <Button disabled={invoke.isPending} onClick={() => invoke.mutate({text: "frontt"})}>
        Invoke bg job
        </Button>
    </div>
  );
};           

export default Page;