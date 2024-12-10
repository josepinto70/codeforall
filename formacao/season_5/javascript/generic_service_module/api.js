class Service {
    constructor(serviceName) {
      this.serviceName = serviceName;
      this.items = [];
    }

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



// Method to list all items
list() {
    return this.items;
  }

  // Get element
  get(identifier) {
    const item = this.items.find(item => item.id === identifier);
    if (!item) {
      throw new Error('Item not found');
    }
    return item;
  }



// Method to update an element
  update(identifier, updatedItem) {
    const index = this.items.findIndex(item => item.id === identifier);
    if (index === -1) {
      throw new Error('Element not found');
    }
    this.items[index] = { ...this.items[index], ...updatedItem };
    return this.items[index];
  }
  
// Method to destroy the element
destroy() {
    this.items = [];
  }


}

 // Example usage:

const userService = new Service('UserService');

// Add items
userService.add({ id: 1, name: 'Camila', email: 'camila@example.com' });
userService.add({ id: 2, name: 'Jose', email: 'jose@example.com' });
userService.add({id: 3, name: 'Igor', email: 'igor@example.com'});


// List all elements of array
console.log(userService.list());

// get element of array
console.log(userService.get(1));

// Remove an item
console.log(userService.remove(1));

// Update an item
console.log(userService.update(1, { email: 'john.doe@newdomain.com' }));

// Remove an item
console.log(userService.remove(2));

// Destroy the service (clear all items)
userService.destroy();
console.log(userService.list());


class GenericService {
  constructor(serviceName) {
    this.serviceName = serviceName;
    this.items = [];
  }

  // Method to get the name of the service
  name() {
    return this.serviceName;
  }

  // Method to add a new item
  add(item) {
    this.items.push(item);
    return item;
  }

  // Method to remove an item by its ID or identifier
  remove(identifier) {
    const index = this.items.findIndex(item => item.id === identifier);
    if (index === -1) {
      throw new Error('Item not found');
    }
    return this.items.splice(index, 1)[0];
  }

  // Method to destroy the service (clear all items)
  destroy() {
    this.items = [];
  }

  // Method to update an item by its ID or identifier
  update(identifier, updatedItem) {
    const index = this.items.findIndex(item => item.id === identifier);
    if (index === -1) {
      throw new Error('Item not found');
    }
    this.items[index] = { ...this.items[index], ...updatedItem };
    return this.items[index];
  }

  // Method to get an item by its ID or identifier
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

const userService = new GenericService('UserService');

// Add items
userService.add({ id: 1, name: 'John Doe', email: 'john@example.com' });
userService.add({ id: 2, name: 'Jane Smith', email: 'jane@example.com' });

// List items
console.log(userService.list());

// Get a single item
console.log(userService.get(1));

// Update an item
console.log(userService.update(1, { email: 'john.doe@newdomain.com' }));

// Remove an item
console.log(userService.remove(2));

// Destroy the service (clear all items)
userService.destroy();
console.log(userService.list());


