using Microsoft.AspNetCore.Mvc;
using SerimBackend.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace SerimBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MailController : Controller
    {
        [HttpPost]
        public JsonResult SendContactMail(Mail send)
        {
            string secretKey = "6Lc4riEdAAAAADKQo1mv1PdhQ5Wz5ysq-RVDYNf8";
            var client = new WebClient();
            var result = client.DownloadString(string.Format("https://www.google.com/recaptcha/api/siteverify?secret={0}&response={1}", secretKey, send.token));
            var obj = JObject.Parse(result);
            bool status = (bool)obj.SelectToken("success");

            if (status)
            {
                SmtpClient sc = new SmtpClient();
                sc.Port = 587;
                sc.Host = "smtp.gmail.com";
                sc.EnableSsl = true;

                sc.Credentials = new NetworkCredential("username", "password");

                MailMessage mail = new MailMessage();
                mail.From = new MailAddress("@gmail.com", send.name);

                mail.To.Add(send.email);
                mail.Subject = send.subject;
                mail.IsBodyHtml = true;
                mail.Body = send.message;

                sc.Send(mail);
                return Json("true");
            }
            else
            {
                return Json("robot");
            }
        }
       
    }
}
