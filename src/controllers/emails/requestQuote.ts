export const RequestQuoteHtml = ({
  name,
  services,
  content,
}: {
  name: string;
  services: string;
  budget: number;
  website: string;
  content: string;
}): string => {
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #fff;
        }

        .container {
            color: #fff;
            max-width: 600px;
            margin: 0 auto;
            background-color: #000;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            max-width: 600px;
            text-align: center;
            padding: 10px 0;
            border-radius: 8px;
        }



        .content {
            margin: 20px 0;
        }

        .content h1 {
            color: #FACC15;
        }

        .content p {
            line-height: 1.6;
        }

        .button {
            display: inline-block;
            background-color: #FACC15;
            color: #000000;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
            
        }

        .button1 {
            display: inline-block;
            background-color: #40E15D;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }

        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #fff;
        }
    </style>
</head>

<body>
    <div class="container" style="color: #ffffff">
        <div class="header">
            <img src="https://firebasestorage.googleapis.com/v0/b/glossour-43a64.appspot.com/o/Group%20192.png?alt=media&token=525b8b1d-f279-4548-b6eb-5e9db60dac00"
                style="width: 100%; height: 8rem; border-radius: 8px; object-fit: cover;" alt="Company Logo">
        </div>
        <div class="content">
            <h1>Quotation for Digital Marketing Services</h1>
            <p style="color:#ffffff">Dear ${name},</p>
            <p style="color:#ffffff"><p class="mb-4">
                Thank you for reaching out to us. Here is the quotation for the
                digital marketing services you requested ${services}:
            </p>
           
          
            <div style="display: flex; gap: 5px;">
             
                <a href="https://wa.me/918818828823" class="button1">WhatsApp</a>
            </div>
            <p style="color: #ffffff">If you have any questions or need to reschedule, feel free to contact us at <a
                    href="mailto:team@glossour.com" style="color: #FACC15;">Team@glossour.com</a>.</p>
            <p style="color:#ffffff">Thank you for choosing our services. We look forward to meeting with you.</p>
            <p style="color:#ffffff">Best regards,</p>
            <p style="color:#ffffff">Glossour Team</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Glossour. All rights reserved.</p>
        </div>
    </div>
</body>

</html>
  `;
};
