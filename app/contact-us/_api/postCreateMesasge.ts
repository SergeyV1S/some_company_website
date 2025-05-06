export interface IPostCreateMesasgeDTO {
  name: string;
  email: string;
  message: string;
}

export interface ICreateMessageResponse {
  message: string;
}

export const postCreateMesasge = async (formData: IPostCreateMesasgeDTO) =>
  fetch("/api/create-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  }).then((res) => res.json() as unknown as ICreateMessageResponse);
