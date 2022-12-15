using FusionBackEnd.Data;
using FusionBackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FusionBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkillsController : Controller
    {
        private readonly AppDataDbContext _appDataDbContext;

        public SkillsController(AppDataDbContext appDataDbContext)
        {
            _appDataDbContext = appDataDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllSkills()
        {
            var skills = await _appDataDbContext.Skills.ToListAsync();
            return Ok(skills);
        }
        [HttpPost]
        public async Task<IActionResult> AddSkill([FromBody] Skill skillRequest)
        {
            skillRequest.SkillID = Guid.NewGuid();
            await _appDataDbContext.Skills.AddAsync(skillRequest);
            await _appDataDbContext.SaveChangesAsync();
            return Ok(skillRequest);
        }
        [HttpGet]
        [Route("{SkillID:Guid}")]
        public async Task<IActionResult> GetSkill([FromRoute] Guid Skillid)
        {
            var skill = await _appDataDbContext.Skills.FirstOrDefaultAsync(x => x.SkillID == Skillid);
            if (skill == null)
            {
                return NotFound();
            }



            return Ok(skill);
        }



        [HttpPut]
        [Route("{SkillID:Guid}")]
        public async Task<IActionResult> updateSkills([FromRoute] Guid Skillid, Skill updatSkillRequest)
        {
            var skill = await _appDataDbContext.Skills.FindAsync(Skillid);
            if (skill == null)
            {
                return NotFound();
            }
            skill.SSkill = updatSkillRequest.SSkill;
            


            await _appDataDbContext.SaveChangesAsync();
            return Ok(skill);
        }



        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            var skill = await _appDataDbContext.Skills.FindAsync(id);
            if (skill == null)
            {
                return NotFound();
            }



            _appDataDbContext.Skills.Remove(skill);
            await _appDataDbContext.SaveChangesAsync();
            return Ok(skill);
        }
    }
}
   