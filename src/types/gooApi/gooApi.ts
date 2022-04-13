export type GooApiPost = {
  app_id: string | undefined;
  sentence: string;
  output_type: string;
};

export type GooApiResponse = {
  request_id: string;
  output_type: string;
  converted: string;
};
