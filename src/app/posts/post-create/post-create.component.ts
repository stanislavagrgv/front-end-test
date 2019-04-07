import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  newPost = 'No content';
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter();
  //  enteredValue = '';

  onSavePost(postInput: HTMLTextAreaElement) {
      // console.log(postInput);
      // this.newPost = postInput.value;
      // this.newPost = this.enteredValue;
  const newPost = {
    title: this.enteredTitle,
    content: this.enteredContent
  };
  this.postCreated.emit(newPost);
  }
}
