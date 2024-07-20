export const RequestQuoteHtml = ({ name, services, budget, website }: { name: string; services: string; budget: number; website: string}): string => {
  return `
    <h1>Quotation for Digital Marketing Services</h1>
    <p>Dear ${name},</p>
    <p>Thank you for reaching out to us. Here is the quotation for the digital marketing services you requested:</p>${services}
    
    <p>Please feel free to reach out if you have any questions or need further assistance.</p>
    <p>Best regards,<br>Glossour</p>
  `
}