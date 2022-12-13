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
        public async Task<IActionResult> getAllSkills()
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
    }
}
