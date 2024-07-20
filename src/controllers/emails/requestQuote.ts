export const RequestQuoteHtml = ({
  name,
  services,
  budget,
  website,
  currency,
}: {
  name: string;
  services: string;
  budget: number;
  website: string;
  currency: string;
}): string => {
  return `
   <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quotation for Digital Marketing Services</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            background-color: #fff;
            color: #000;
        }
    </style>
</head>

<body class=" bg-white  text-black">
    <div class="container mx-auto p-5">
        <div class="flex justify-center items-center flex-col py-10">
            <div class="w-full md:w-1/2 h-48 mb-5">
                <img src="https://firebasestorage.googleapis.com/v0/b/glossour-43a64.appspot.com/o/Group%20192.png?alt=media&token=525b8b1d-f279-4548-b6eb-5e9db60dac00"
                    alt="Company Logo" class="w-full h-full rounded-xl object-cover" />
            </div>
            <div class="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
                <h1 class="text-2xl font-bold text-yellow-500 mb-4">Quotation for Digital Marketing Services</h1>
                <p class="mb-4">Dear ${name},</p>
                <p class="mb-4">Thank you for reaching out to us. Here is the quotation for the digital marketing
                    services you requested:</p>
                <div class="mb-4">${services}</div>
                <p class="mb-4"><strong>Budget:</strong> ${budget} ${currency}</p>
                <p class="mb-4"><strong>Website:</strong> <a href="${website}" class="text-yellow-500">${website}</a>
                </p>
                <p class="mb-4">Please feel free to reach out if you have any questions or need further assistance.</p>
                <p>Best regards,<br><span class="font-bold">Glossour</span></p>
            </div>
            <div class="footer mt-10 w-full md:w-1/2 border-t-2 font-semibold  flex justify-between border-black pt-4 text-center">
                <p>&copy; 2024 Glossour. All rights reserved.</p>
                <a href="https://glossour.com" class=" text-black">Glossour.com</a>
            </div>
        </div>
    </div>
</body>

</html>
  `;
};
