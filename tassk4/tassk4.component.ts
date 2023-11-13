import { Component } from '@angular/core';

@Component({
  selector: 'app-tassk4',
  templateUrl: './tassk4.component.html',
  styleUrls: ['./tassk4.component.css']
})
export class Tassk4Component {

  items: any[] = [
    { id: 1, name: 'Eman', username: 'ema', phonenumber: '0021685129359' ,details:"electrical engineer", showDetails: false },
    { id: 2, name: 'Sameh', username: 'sam', phonenumber: '0021685129359',details:"mechanical engineer" , showDetails: false },
    { id: 3, name: 'sussana', username: 'suzi', phonenumber: '0021685129359' ,details:"civil engineer", showDetails: false },
  ];


  deleteItem(item: any): void {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }

  }
  selectedItem: any | null = null;

  editItem(item: any): void {
    this.selectedItem = { ...item }; // Create a shallow copy of the selected item
  }

  updateItem(): void {
    if (this.selectedItem) {
      const index = this.items.findIndex(item => item.id === this.selectedItem.id);
      if (index > -1) {
        this.items[index] = { ...this.selectedItem }; // Update the item in the array
        this.selectedItem = null; // Clear the selected item
      }
    }
  }

  toggleDetails(item: any): void {
    item.showDetails = !item.showDetails; // Toggle the showDetails property
}  newItem: any = {};
showAddForm: boolean = false;
toggleAddForm() {
  this.showAddForm = !this.showAddForm;
}
addItem() {   this.newItem.id=this.items.length + 1;

  this.items.push(this.newItem);
  this.newItem = {}; // Reset the newItem object
}


}

