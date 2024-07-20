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
                    alt="Company Logo" class="w-full h-full object-cover rounded-xl" />
            </div>
            <div class="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
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
            </div>
            <div class="footer mt-10 w-full md:w-1/2 border-t-2 font-semibold  flex justify-between border-black pt-4 text-center">
                <p>&copy; 2024 GLOSSOUR. All rights reserved.</p>
                <a href="https://glossour.com" class=" text-black">Glossour.com</a>
            </div>
        </div>
    </div>
</body>

</html>
`;
};
