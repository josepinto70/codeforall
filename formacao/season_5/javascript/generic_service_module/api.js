class Service {
    constructor(serviceName) {
      this.serviceName = serviceName;
      this.items = [];
    }

 
// Methods:
//    
// name
// add (ok)
// remove (ok)
// destroy (ok)
// update
// get (ok)
// list (ok)

// get name of service
name() {
    return this.serviceName;
  }
//add element to array
add(item) 
{
    this.items.push(item);
    return item;
 }

//remove element of array

remove(identifier) {
    const index = this.items.findIndex(item => item.id === identifier);
    if (index === -1) {
      throw new Error('Element not found');
    }
    return this.items.splice(index, 1)[0];
  }

 
// Method to destroy the element
destroy() {
  this.items = [];
}


// Method to update an element
update(identifier, updatedItem) {
  const index = this.items.findIndex(item => item.id === identifier);
  if (index === -1) {
    throw new Error('Item not found');
  }
  this.items[index] = { ...this.items[index], ...updatedItem };
  return this.items[index];
}



// Get element of Array
get(identifier) {
  const item = this.items.find(item => item.id === identifier);
  if (!item) {
    throw new Error('Item not found');
  }
  return item;
}


// Method to list all items
list() {
  return this.items;
}

}

 // Example usage:

const userService = new Service('UserService');

// Add items
userService.add({ id: 1, name: 'Camila', email: 'camila@example.com' });
userService.add({ id: 2, name: 'Jose', email: 'jose@example.com' });
userService.add({id: 3, name: 'Igor', email: 'igor@example.com'});



console.log("> List all elements of array");
console.log(userService.list());


console.log("\n > get element of array");
console.log(userService.get(1));


console.log("\n > Update a element of Array of email");
console.log(userService.update(1, { email: 'john.doe@newdomain.com' }));

console.log("\n > After update the element id:1 the email change in Array");
console.log(userService.list());


console.log("\n > Remove element of Arrays");
console.log(userService.remove(2));

console.log("\n > After remove the element id:2, the Jose not appear again in Array");
console.log(userService.list());

// Destroy the service (clear all items)
console.log("\n > Destroy all elements of Array. Array empty");
userService.destroy();
console.log(userService.list());


