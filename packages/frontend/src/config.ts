const config = {
  
    STRIPE_KEY: "pk_test_51Ov23HJxaO01Zx6J9afsU9dx7jsNpssC9X490y8Sdt8UTRzFV99OImN80lZvpeAYA0hrXz1GVJBQv2Hrz6qxE3Lu00rFes59cm",
   
   
    // Frontend config
    MAX_ATTACHMENT_SIZE: 5000000,

    // Backend config
    s3: {
      REGION: import.meta.env.VITE_REGION,
      BUCKET: import.meta.env.VITE_BUCKET,
    },
    apiGateway: {
      REGION: import.meta.env.VITE_REGION,
      URL: import.meta.env.VITE_API_URL,
    },
    cognito: {
      REGION: import.meta.env.VITE_REGION,
      USER_POOL_ID: import.meta.env.VITE_USER_POOL_ID,
      APP_CLIENT_ID: import.meta.env.VITE_USER_POOL_CLIENT_ID,
      IDENTITY_POOL_ID: import.meta.env.VITE_IDENTITY_POOL_ID,
    },
  };
  
  export default config;