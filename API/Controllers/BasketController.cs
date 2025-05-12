using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class BasketController(StoreContext context) : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<Basket>> GetBasket()
        {
            var basket = await RetrieveBasket();
            if (basket == null)
            {
                return NoContent();
            }
            return basket;
        }

        [HttpPost]
        public async Task<ActionResult> AddItemTobasket(int productId, int quantity)
        {
            //get basket
            // create basket
            // get Product
            //add item to basket
            // save changes
            var basket = await RetrieveBasket();
            basket ??= CreateBasket();
            var product = await context.Products.FindAsync(productId);
            if (product == null ) return BadRequest("Problem adding item to basket");
            basket.AddItem(product, quantity);
            var result = await context.SaveChangesAsync() > 0;
            if(result) return CreatedAtAction(nameof(GetBasket), basket);
            return BadRequest("Problem updating basket");
        }

        public Basket? CreateBasket()
        {
            var basketId = Guid.NewGuid().ToString();
            var cookiesOptions = new CookieOptions
            {
                IsEssential = true,
                Expires = DateTime.UtcNow.AddDays(30)
            };
            Response.Cookies.Append("basketId", basketId, cookiesOptions);
            var basket = new Basket { BasketId = basketId };
            context.Baskets.Add(basket);
            return basket;
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveItemFromBasket(int productId, int quantity)
        {
            return Ok();
        }

        public async Task<Basket?> RetrieveBasket()
        {
            return await context.Baskets
               .Include(b => b.Items)
               .ThenInclude(p => p.Product)
               .FirstOrDefaultAsync(x => x.BasketId == Request.Cookies["basketId"]);
        }
    }

}