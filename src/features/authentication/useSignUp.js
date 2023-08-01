import { useMutation } from "@tanstack/react-query";
import { signup as signUpAPI } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUpAPI,
    onSuccess: (user) => {
      toast.success("Account successfully created! Please verify the email address ");
    },
  });

  return { signup, isLoading };
}
