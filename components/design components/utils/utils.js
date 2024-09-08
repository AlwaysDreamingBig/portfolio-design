// utils/emailService.js
import emailjs from 'emailjs-com';

const sendEmail = async (formData) => {
  try {
    // Construct the message body from formData
    const message = 
      'Message sent by:\n\r\n\r ' + 
      '\t\t\t\t Name: ' + formData.firstName + '\t' + formData.lastName + '\n\r' +
      '\t\t\t\t Email: ' + formData.email + '\n\r' +
      '\t\t\t\t Phone: ' + formData.phone + '\n\r' +
      '\t\t\t\t Company: ' + formData.company + '\n\r' +
      '\t\t\t\t Address: ' + formData.city + '\n\r\n\r\n\r' +
      'For service: ' + formData.service + '\n\r\n\r\n\r' +
      'Message: \n\r\n\r' + formData.message + '\n\r';

    // Define the parameters for the email
    const templateParams = {
      message: message,
      to_name: 'Auriol',
      reply_to: formData.email,
    };

    // Send the email via EmailJS
    const response = await emailjs.send(
      'service_eybfp4i',      // Replace with your EmailJS service ID
      'template_zh5v2ud',     // Replace with your EmailJS template ID
      templateParams,
      'LMEdPT4905vLIIIoj'          // Replace with your EmailJS user ID
    );

    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default sendEmail;
