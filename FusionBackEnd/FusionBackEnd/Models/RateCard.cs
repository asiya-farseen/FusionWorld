using System;
using System.ComponentModel.DataAnnotations;

namespace FusionBackEnd.Models
{
    public class RateCard
    {
        [Key]
        public int RateCardID { get; set; }
       
        public Guid SkillID { get; set; }//Foreign key reference for skills skill ID
        public Skill Skill { get; set; }
      
        public int MinYrExperienc { get; set; }
        public int MaxYrExperience { get; set; }
        public double RatePerHrUSD { get; set; }
        public Guid CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public Guid LastUpdateBy { get; set; }

        public DateTime LastUpdateOn { get; set; }

        //SkillID 
        //    MinnYrExperience small
        //    MaxYrExperience small
        //    RaetPerHrUSD Double
        //    CreatedBy Guid
        //    CreatedOn datetime2
        //    LastUpdateBy Guid
        //    LadtUpdateOn datetime2
    }
}
