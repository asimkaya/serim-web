using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SerimBackend.Models
{
    public class Mail
    {
        public string name { get; set; }
        public string email { get; set; }
        public string phoneNumber { get; set; }
        public string subject { get; set; }
        public string message { get; set; }
        public string token { get; set; }
    }
}
