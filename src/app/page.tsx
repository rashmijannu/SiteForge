"use client";
import { toast } from "sonner";
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
      <Button disabled={invoke.isPending} onClick={() => invoke.mutate({text: "frontt"})}>
        Invoke bg job
        </Button>
    </div>
  );
};           

export default Page;