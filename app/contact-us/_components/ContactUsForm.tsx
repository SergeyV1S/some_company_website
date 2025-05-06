"use client";

import { postCreateMesasge } from "../_api";
import type { ICreateMessageResponse, IPostCreateMesasgeDTO } from "../_api";
import { Button, Input, Typography } from "@/components/ui";
import { useForm } from "@/hooks";
import { Box, Card, CardContent, FormControl } from "@mui/material";

export const ContactUsForm = () => {
  const { formData, isLoading, responseData, errors, reset, handleChange, handleSubmit } = useForm<
    IPostCreateMesasgeDTO,
    ICreateMessageResponse
  >({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    onSubmit: async (formData) => postCreateMesasge(formData),
    validateForm: (formData) => {
      const newErrors = {
        name: formData.name.trim() === "",
        message: formData.message.trim() === "",
        email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      };
      return newErrors;
    }
  });

  return (
    <>
      {!responseData && (
        <>
          <Typography customVariant='h1'>Свяжитесь с нами!</Typography>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent component='form' onSubmit={handleSubmit}>
              <FormControl fullWidth margin='normal' error={errors.name}>
                <Input
                  label='Имя'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  helperText={errors.name ? "Поле обязательно для заполнения" : ""}
                />
              </FormControl>

              <FormControl fullWidth margin='normal' error={errors.email}>
                <Input
                  label='Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email ? "Введите корректный email" : ""}
                />
              </FormControl>

              <FormControl fullWidth margin='normal' error={errors.email}>
                <Input
                  label='Message'
                  name='message'
                  multiline
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  helperText={errors.message ? "Поле обязательно для заполнения" : ""}
                />
              </FormControl>

              <Box sx={{ mt: 3 }}>
                <Button
                  loading={isLoading}
                  type='submit'
                  variant='contained'
                  fullWidth
                  size='medium'
                >
                  Отправить
                </Button>
              </Box>
            </CardContent>
          </Card>
        </>
      )}
      {responseData && (
        <Box display='flex' flexDirection='column' alignItems='center' gap={2}>
          <Typography customVariant='h1'>{responseData.message}</Typography>
          <Typography>
            Мы уже обрабатываем ваш запрос. Ожидайте письмо на указанный email с дальнейшими шагами.
          </Typography>
          <Button
            variant='contained'
            customVariant='defaultSM'
            sx={{ width: "fit-content", textTransform: "none" }}
            onClick={reset}
            size='medium'
          >
            Отправить ещё одну заявку
          </Button>
        </Box>
      )}
    </>
  );
};
