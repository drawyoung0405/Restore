namespace API.Entities
{
    public class BasketItem
    {
        public int Id { get; set; }
        public int Quantity {set; get;}

        /// Navigation properties
        public int ProductId {get; set;}
        public required Product Product {get; set;} 
    }
}