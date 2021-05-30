import { Component, 
          ViewChild}              from "@angular/core";
import { NgForm }                 from "@angular/forms";
import { MatAccordion }           from '@angular/material/expansion';
import { MatDatepickerModule }    from '@angular/material/datepicker';


import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-create-idea",
  templateUrl: "./post-create-idea.component.html",
  styleUrls: ["./post-create-idea.component.css"]
})
export class PostCreateIdeaComponent {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  enteredTitle = "";
  enteredContent = "";

  constructor(public postsService: PostsService) {}

  step = 0;

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, 
                              form.value.content
                              );
    form.resetForm();
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}