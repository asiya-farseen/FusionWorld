using FusionBackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace FusionBackEnd.Data
{
    public class AppDataDbContext : DbContext
    {
        public AppDataDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Skill> Skills { get; set; }
        public DbSet<RateCard> RateCards { get; set; }
    }
}
