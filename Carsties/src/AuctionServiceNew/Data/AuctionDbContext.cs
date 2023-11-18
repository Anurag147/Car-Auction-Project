using AuctionServiceNew.Entities;
using Microsoft.EntityFrameworkCore;

namespace AuctionServiceNew.Data
{
    public class AuctionDbContext:DbContext
    {
        public AuctionDbContext(DbContextOptions options):base(options)
        {

        }

        public DbSet<Auction> Auctions { get; set; }
    }
}
