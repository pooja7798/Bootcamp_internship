
import { UniqueId } from "./utils/UniqueId.js";

class expense {
    constructor(amount, description, category, date) {
        this.id = UniqueId({ prefix: "exp" });
        this.amount = amount;
        this.description = description;
        this.category = category;
        this.date = date;
    }
}
  
export default Expenses;  
