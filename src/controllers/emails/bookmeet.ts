interface BookingDetails {
    name: string;
    link: string;
    service: string;
    budget: number;
    date: string;
    currency: string;
    timeSlot: string;
}

export const BookMeetConfimed = ({name, link, service, budget, date, currency, timeSlot}: BookingDetails) => { 
    return `<!DOCTYPE html>
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
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
        }
        .header img {
            max-width: 150px;
        }
        .content {
            margin: 20px 0;
        }
        .content h1 {
            color: #342675;
        }
        .content p {
            line-height: 1.6;
        }
        .button {
            display: inline-block;
            background-color: #342675;
            color: #fff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #888;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://firebasestorage.googleapis.com/v0/b/mint-nft-80488.appspot.com/o/Glossour%20(1).png?alt=media&token=dee4b2f7-a6ff-4dd0-8dc7-b1385092f1a5" alt="Company Logo">
        </div>
        <div class="content">
            <h1>Booking Confirmation</h1>
            <p>Dear ${name},</p>
            <p>We are pleased to inform you that your booking has been confirmed for the next available time slot. Here are the details of your booking:</p>
            <ul>
                <li><strong>Date:</strong> ${date}</li>
                <li><strong>Time Slot:</strong> ${timeSlot}</li>
                <li><strong>Service:</strong> ${service}</li>
                <li><strong>Budget:</strong> ${currency} ${budget}</li>
            </ul>
            <p>To join the meeting, please use the following link:</p>
            <a href=${link} class="button">Join Meeting</a>
            <p>If you have any questions or need to reschedule, feel free to contact us at <a href="mailto:	
TeamGlossour@gmail.com">	
TeamGlossour@gmail.com</a>.</p>
            <p>Thank you for choosing our services. We look forward to meeting with you.</p>
            <p>Best regards,</p>
            <p>GLOSSOUR</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 GLOSSOUR. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`
}