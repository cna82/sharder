
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, phone, subject, message, recaptcha } = body;

    if (!recaptcha) {
      return Response.json({ message: "لطفاً تأیید کنید که ربات نیستید" }, { status: 400 });
    }

    const recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${"6Lff9z0rAAAAADQD2BkRRGn_wYg1_onNPZwMApbH"}&response=${recaptcha}`;
    const recaptchaRes = await fetch(recaptchaVerifyUrl, { method: "POST" });
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      return Response.json({ message: "تأیید کپچا ناموفق بود. لطفاً مجدداً تلاش کنید." }, { status: 400 });
    }

    // ✅ پورت 587، TLS، و secure=false
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // مهم! چون TLS هست، باید false باشه
      auth: {
        user: "mehr3117@gmail.com",
        pass: "zftnbhjurtrgfvzg", // App Password
      },
    });

    const mailOptions = {
      from: `"${fullName}" <mehr3117@gmail.com>`,
      to: "mehr3117@gmail.com",
      subject: `📩 فرم تماس جدید: ${subject}`,
      html: `
        <div dir="rtl" style="background-color: # ; padding: 32px; font-family: Tahoma, sans-serif;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); border: 1px solid #e5e7eb;">
            <div style="background-color: #fb923c; color: white; padding: 24px 32px; border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;">
              <h2 style="font-size: 20px; margin: 0;">📬 فرم تماس جدید</h2>
            </div>

            <div style="padding: 32px;">
              <p><strong>👤 نام کامل:</strong> ${fullName}</p>
              <p><strong>📧 ایمیل:</strong> ${email}</p>
              <p><strong>📱 شماره تماس:</strong> ${phone}</p>
              <p><strong>📝 موضوع:</strong> ${subject}</p>
              <div style="margin-top: 24px;">
                <strong>💬 پیام:</strong>
                <div style="background-color: #f3f4f6; padding: 16px; border-radius: 0.375rem; margin-top: 8px; line-height: 1.625; color: #111827;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </div>
            </div>

            <div style="background-color: #f3f4f6; padding: 16px 32px; font-size: 12px; color: #6b7280; border-bottom-left-radius: 0.5rem; border-bottom-right-radius: 0.5rem; text-align: center;">
              این پیام به‌صورت خودکار از طریق فرم تماس وب‌سایت ارسال شده است.
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "پیام شما با موفقیت ارسال شد" }, { status: 200 });
  } catch (error) {
    console.error("❌ خطا در ارسال ایمیل:", error);
    return Response.json({ success: false, message: "خطا در ارسال پیام. لطفاً بعداً تلاش کنید." }, { status: 500 });
  }
}
