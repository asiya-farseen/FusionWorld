using System.ComponentModel.DataAnnotations;

namespace FusionBackEnd.Models
{
    public class Skill
    {
        [Key]
        public Guid SkillID { get; set; }
        public string SSkill { get; set; }
    }
}
