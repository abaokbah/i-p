import { Component, 
          NgModule, 
          ViewChild}              from "@angular/core";
import { NgForm,
          FormBuilder, 
          FormControl, 
          FormGroup }             from "@angular/forms";
import { ThemePalette }           from "@angular/material/core"
import { MatAccordion }           from '@angular/material/expansion';
import { PostsService }           from "../posts.service";
// import { MatDatepickerModule }    from '@angular/material/datepicker';

export interface Domain {
  name: string;
  subdomain?: Domain[];
}

// export interface Idea {
//   name: string;
//   subdomain?: Idea[];
//   dev?: Idea[];

// }


// export interface Domain {
//   name: string;
//   completed: boolean;
//   color: ThemePalette;
//   subtasks?: Domain[];
// }

@Component({
  selector: "app-post-create-idea",
  templateUrl: "./post-create-idea.component.html",
  styleUrls: ["./post-create-idea.component.css"]
})
export class PostCreateIdeaComponent {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  enteredTitle = "";
  enteredContent = "";
  other = false;

  // domains: FormGroup;

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('');

  domain: Domain = {
    name: "energy",
    subdomain: [
      {name: "Circular Economy & Decarbonization"},
      {name: "Energy Storage"},
      {name: "Green Fuels"},
      {name: "Energy Storage"},
      {name: "Renewables"},
      {name: "Advanced Robotics"},
      {name: "Additive Manufacturing"},
      {name: "Other (please specify)"}
    ]
  }

  constructor(public postsService: PostsService, fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

    // this.domains = fb.group({
    //   circulaEconomy: false,
    //   greenfuels: false,
    //   energyefficiency: false
    // });

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