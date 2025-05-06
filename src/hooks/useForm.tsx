/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

interface IUseForm<FormData, ResponseData> {
  initialValues: FormData;
  onSubmit: (values: FormData) => Promise<ResponseData>;
  validateForm?: (values: FormData) => Record<keyof FormData, boolean>;
}

export const useForm = <FormData extends Record<string, any>, ResponseData>({
  initialValues,
  onSubmit,
  validateForm
}: IUseForm<FormData, ResponseData>) => {
  const [formData, setFormData] = useState<FormData>(initialValues);
  const [errors, setErrors] = useState<Record<keyof FormData, boolean>>(
    Object.keys(initialValues).reduce(
      (acc, key) => ({
        ...acc,
        [key]: false
      }),
      {} as Record<keyof FormData, boolean>
    )
  );
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<ResponseData | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm) {
      const validationErrors = validateForm(formData);
      setErrors(validationErrors);

      if (Object.values(validationErrors).some(Boolean)) {
        return;
      }
    }

    try {
      setIsLoading(true);
      const response = await onSubmit(formData);
      setResponseData(response);
    } catch (error) {
      console.log(`Error ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: false
    }));
  };

  const reset = () => {
    setResponseData(null);
    setFormData(initialValues);
    setErrors(
      Object.keys(initialValues).reduce(
        (acc, key) => ({
          ...acc,
          [key]: false
        }),
        {} as Record<keyof FormData, boolean>
      )
    );
  };

  return {
    formData,
    errors,
    handleSubmit,
    reset,
    handleChange,
    isLoading,
    responseData
  };
};
