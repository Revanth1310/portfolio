from flask import Flask, render_template, request
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)

# Function to send email
def send_email(subject, body, to_email):
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    sender_email = "revanthchandika@gmail.com"  # Replace with your email
    sender_password = "yvvi ogik nwre toaq"  # Replace with your email password

    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = to_email
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()  # Secure the connection
        server.login(sender_email, sender_password)
        text = msg.as_string()
        server.sendmail(sender_email, to_email, text)
        server.quit()
        print("Email sent successfully!")
    except Exception as e:
        print(f"Error sending email: {e}")

@app.route('/')
def index():
    return render_template('main.html')

@app.route('/send-feedback', methods=['POST'])
def send_feedback():
    # Get form data
    name = request.form['name']
    email = request.form['email']
    feedback = request.form['feedback']

    # Prepare email content
    subject = f"Feedback from {name}"
    body = f"Feedback from {name} ({email}):\n\n{feedback}"

    # Send the email
    try:
        send_email(subject, body, "revanthchandika@gmail.com")  # Your recipient email
        return render_template('feedback.html', alert="Thank you for your feedback! Your message has been sent.")
    except Exception as e:
        return render_template('feedback.html', alert="There was an error sending your message. Please try again later.")

    

if __name__ == "__main__":
    app.run(debug=True)
