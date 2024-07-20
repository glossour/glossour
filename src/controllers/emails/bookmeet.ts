interface BookingDetails {
  name: string;
  link: string;
  service: string;
  budget: number;
  date: string;
  currency: string;
  timeSlot: string;
}

export const BookMeetConfimed = ({
  name,
  link,
  service,
  budget,
  date,
  currency,
  timeSlot,
}: BookingDetails) => {
  return `
 <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Booking Confirmation</title>
    <style>
        body {
            background-color: #fff;
            color: #000;
            font-family: 'Roboto', sans-serif;
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
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
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

        .list-disc {
            list-style-type: disc;
        }

        .list-inside {
            list-style-position: inside;
        }

        .inline-block {
            display: inline-block;
        }

        .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        .py-3 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
        }

        .bg-yellow-500 {
            background-color: #ecc94b;
        }

        .rounded-lg {
            border-radius: 0.5rem;
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

        .border-black {
            border-color: #000;
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
        <div class="flex justify-center items-center flex-col py-10">
      
             
          
            <div class="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full ">
                <img src="https://firebasestorage.googleapis.com/v0/b/glossour-43a64.appspot.com/o/Group%20192.png?alt=media&token=525b8b1d-f279-4548-b6eb-5e9db60dac00"
                    alt="Company Logo" class="w-full  object-cover h-48 " />
                <h1 class="text-2xl font-bold text-yellow-500 mb-4">Booking Confirmation</h1>
                <p class="mb-4">Dear ${name},</p>
                <p class="mb-4">
                    We are pleased to inform you that your booking has been confirmed for
                    the next available time slot. Here are the details of your booking:
                </p>
                <ul class="mb-4 list-disc list-inside">
                    <li><strong>Date:</strong> ${date}</li>
                    <li><strong>Time Slot:</strong> ${timeSlot}</li>
                    <li><strong>Service:</strong> ${service}</li>
                    <li><strong>Budget:</strong> ${currency} ${budget}</li>
                </ul>
                <p class="mb-4">To join the meeting, please use the following link:</p>
                <a href="${link}" class="inline-block px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg mb-4">Join
                    Meeting</a>
                <p class="mb-4">
                    If you have any questions or need to reschedule, feel free to contact
                    us at
                    <a href="mailto:team@glossour.com" class="text-yellow-500">Team@glossour.com</a>.
                </p>
                <p class="mb-4">
                    Thank you for choosing our services. We look forward to meeting with
                    you.
                </p>
                <p>Best regards,</p>
                <p class="font-bold">GLOSSOUR</p>
                    <div class="footer mt-10 w-full  border-t-2 font-semibold  flex justify-between items-center  pt-4 text-center">
                        <p>&copy; 2024 GLOSSOUR. All rights reserved.</p>
                        <a href="https://glossour.com" class=" text-white">Glossour.com</a>
                    </div>
            </div>
       
        </div>
    </div>
</body>

</html>
`;
};
