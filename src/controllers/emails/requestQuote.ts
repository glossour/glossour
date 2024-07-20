export const RequestQuoteHtml = ({
  name,
  services,
  budget,
  website,
}: {
  name: string;
  services: string;
  budget: number;
  website: string;
}): string => {
  return `
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quotation for Digital Marketing Services</title>
    <style>
      body {
        background-color: #fff;
        color: #000;
        font-family: "Inter", sans-serif;
      }

      .bg-white {
        background-color: #fff;
      }

      .text-black {
        color: #000;
      }

      .container {
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
      }

      .mx-auto {
        margin-left: auto;
        margin-right: auto;
      }

      .p-5 {
        padding: 1.25rem;
      }

      .flex {
        display: flex;
      }

      .justify-center {
        justify-content: center;
      }

      .items-center {
        align-items: center;
      }

      .flex-col {
        flex-direction: column;
      }

      .py-10 {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
      }

      .w-full {
        width: 100%;
      }

      .md\:w-1\/2 {
        width: 50%;
      }

      .h-48 {
        height: 12rem;
      }

      .mb-5 {
        margin-bottom: 1.25rem;
      }

      .rounded-xl {
        border-radius: 0.75rem;
      }

      .object-cover {
        object-fit: cover;
      }

      .bg-gray-900 {
        background-color: #1a202c;
      }

      .text-white {
        color: #fff;
      }

      .p-6 {
        padding: 1.5rem;
      }

      .rounded-lg {
        border-radius: 0.5rem;
      }

      .shadow-lg {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }

      .text-2xl {
        font-size: 1.5rem;
        line-height: 2rem;
      }

      .font-bold {
        font-weight: 700;
      }

      .text-yellow-500 {
        color: #ecc94b;
      }

      .mb-4 {
        margin-bottom: 1rem;
      }

      .mt-10 {
        margin-top: 2.5rem;
      }

      .border-t-2 {
         border-top: 2px solid #ecc94b;

        
      }

      .font-semibold {
        font-weight: 600;
      }

      .border-yellow {
        border-color: #f2ef21;
      }

      .pt-4 {
        padding-top: 1rem;
      }

      .text-center {
        text-align: center;
      }

      .justify-between {
        justify-content: space-between;
      }
    </style>
  </head>

  <body class="bg-white text-black">
    <div class="container p-5">
      <div class="flex justify-center items-center w-full flex-col py-10">
        
        
       
        <div
          class="bg-gray-900 text-white p-6  rounded-b-xl shadow-lg w-full "
        >
        <img src="https://firebasestorage.googleapis.com/v0/b/glossour-43a64.appspot.com/o/Group%20192.png?alt=media&token=525b8b1d-f279-4548-b6eb-5e9db60dac00"
            alt="Company Logo" class="w-full  h-48   object-cover" />
          <h1 class="text-2xl font-bold text-yellow-500 mb-4">
            Quotation for Digital Marketing Services
          </h1>
          <p class="mb-4">Dear ${name},</p>
          <p class="mb-4">
            Thank you for reaching out to us. Here is the quotation for the
            digital marketing services you requested:
          </p>
          <div class="mb-4">${services}</div>
          <p class="mb-4"><strong>Budget:</strong> ${budget} INR</p>
          <p class="mb-4">
            <strong>Website:</strong>
            <a href="${website}" class="text-yellow-500">${website}</a>
          </p>
          <p class="mb-4">
            Please feel free to reach out if you have any questions or need
            further assistance.
          </p>
          <p>Best regards,<br /><span class="font-bold">Glossour</span></p>
            <div class="footer mt-10 w-full  border-t-2 font-semibold flex justify-between  items-center   ">
                <p>&copy; 2024 Glossour. All rights reserved.</p>
                <a href="https://glossour.com" class="text-white">Glossour.com</a>
            </div>
        </div>
     
      </div>
    </div>
  </body>
</html>

  `;
};
